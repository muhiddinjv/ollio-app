import {
  useCallback,
  useMemo,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { Alert } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { getAccessToken } from "../screens/Auth/astorage";
import axiosInstance from "../screens/Auth/axiostance";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [goodQty, setGoodQty] = useState(0);
  const [goodId, setGoodId] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [billItem, setBillItem] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [openBills, setOpenBills] = useState([]);
  const [bills, setBills] = useState([]);
  const [bill, setBill] = useState({
    client_id: null,
    products: [],
  });

  useEffect(() => {
    const loadStorageData = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      const storedBill = await AsyncStorage.getItem("bill");
      const storedClient = await AsyncStorage.getItem("client");
      const storedClients = await AsyncStorage.getItem("clients");
      const storedBillItem = await AsyncStorage.getItem("billItem");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setBill(storedBill ? JSON.parse(storedBill) : null);
      setClient(storedClient ? JSON.parse(storedClient) : null);
      setClients(storedClients ? JSON.parse(storedClients) : []);
      setBillItem(storedBillItem ? JSON.parse(storedBillItem) : null);
    };
    loadStorageData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("user", JSON.stringify(user));
    AsyncStorage.setItem("bill", JSON.stringify(bill));
    AsyncStorage.setItem("client", JSON.stringify(client));
    AsyncStorage.setItem("clients", JSON.stringify(clients));
    AsyncStorage.setItem("billItem", JSON.stringify(billItem));
    AsyncStorage.setItem("selectedGoods", JSON.stringify(selectedGoods));
  }, [user, client, clients, selectedGoods, bill, openBills, billItem]);


  const fetchBills = async () => {
    try {
      const response = await axiosInstance.get("/bills");
      setBills(response.data);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const deleteBill = async (billId, setBills) => {
    Alert.alert(
      "Delete Bill",
      "Are you sure you want to delete this bill?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await axiosInstance.delete(`/bills/${billId}`);
              setBills((prevBills) => prevBills.filter((bill) => bill._id !== billId));
            } catch (error) {
              console.error("Error deleting bill:", error.response ? error.response.data : error.message);
              throw error;
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const addClientToBill = (clientId) => {
    setBill((prevBill) => ({
      ...prevBill,
      client_id: clientId,
    }));
  };

  const addProductToBill = (productId, quantity, title, price) => {
    setBill((prevBill) => {
      const existingProductIndex = prevBill.products.findIndex(
        (p) => p.product_id === productId
      );
      if (existingProductIndex > -1) {
        // If the product already exists, update the quantity
        const updatedProducts = [...prevBill.products];
        updatedProducts[existingProductIndex].quantity += quantity;
        return { ...prevBill, products: updatedProducts };
      } else {
        // If the product does not exist, add it to the list
        return {
          ...prevBill,
          products: [
            ...prevBill.products,
            { product_id: productId, quantity, title, price },
          ],
        };
      }
    });
  };

  const getTotalQuantity = () => {
    return bill.products.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  const saveBill = async () => {
    setLoading(true);
    const billData = {
      client_id: bill.client_id,
      products: bill.products.map(product => ({
        product_id: product.product_id,
        quantity: product.quantity,
      })),
    };

    try {
      const response = await axiosInstance.post("/bills", billData);
      if (response.data.success) {
        setBill({ client_id: null, products: [] });
        setBillItem(response.data.bill);
        fetchBills();
      } else {
        Alert.alert("Error", `Failed to create bill: ${response.data.message}`);
      }
    } catch (error) {
      Alert.alert("Error", `Error creating bill: ${error.response ? error.response.data : error.message}`);
    } finally {
      setLoading(false);
    }
  };

  console.log("GlobalProvider billItem: ", JSON.stringify(billItem));

  return (
    <GlobalContext.Provider
      value={{
        saveBill,
        fetchBills,
        deleteBill,
        user, setUser,
        bill, setBill,
        bills, setBills,
        addClientToBill,
        addProductToBill,
        getTotalQuantity,
        loading, setLoading,
        client, setClient,
        goodId, setGoodId,
        clients, setClients,
        goodQty, setGoodQty,
        billItem, setBillItem,
        openBills, setOpenBills,
        selectedGoods, setSelectedGoods,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    console.error(
      "GlobalContext is undefined! Ensure GlobalProvider is wrapping your component tree."
    );
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
};

export const useInfiniteScroll = ({ key, url, limit = 100, filters }) => {
  const queryKey = [
    ...key,
    ..._.values(_.omitBy(filters || {}, _.isEmpty)),
  ].filter((c) => Boolean(c) && !_.isEmpty(c));

  const [isRefreshing, setIsRefreshing] = useState(false);

  const queryFn = async ({ pageParam = 1 }) => {
    const accessToken = await getAccessToken();
    const { data } = await axiosInstance.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        page: pageParam,
        limit,
        ...filters,
      },
    });

    return {
      data: data,
      nextPage: pageParam + 1,
    };
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, __, lastPageParam) => {
        if (lastPage.data.length < limit) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (_, __, firstPageParam) => {
        if (firstPageParam === 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
    });

  const loadNext = useCallback(() => {
    hasNextPage && fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const onRefresh = useCallback(() => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      refetch()
        .then(() => setIsRefreshing(false))
        .catch(() => setIsRefreshing(false));
    }
  }, [isRefreshing, refetch]);

  const flattenData = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data?.pages]);

  return {
    data: flattenData,
    onEndReached: loadNext,
    isRefreshing,
    onRefresh,
    isFetchingNextPage,
  };
};

export const useGetGood = (goodId) => {
  const fetchGood = async () => {
    const accessToken = await getAccessToken();
    const response = await axiosInstance.get(`stock/${goodId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  };

  return useQuery({
    queryKey: ["GET_GOOD", goodId],
    queryFn: fetchGood,
    enabled: !!goodId, // Only run the query if goodId is provided
    onError: (error) => {
      console.error("Error fetching good:", error);
    },
  });
};

export const useCatalog = () => {
  const fetchCatalog = async () => {
    const accessToken = await getAccessToken();
    const response = await axiosInstance.get("catalog", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  };

  return useQuery({
    queryKey: ["CATALOG_ITEMS"],
    queryFn: async () => {
      return await fetchCatalog()
        .then((res) => res)
        .catch((err) => console.log(err));
    },
  });
};