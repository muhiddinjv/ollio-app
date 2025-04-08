import {
  useCallback,
  useMemo,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";
import { getAccessToken } from "../screens/Auth/astorage";
import axiosInstance from "../screens/Auth/axiostance";
import { calculateTotal } from "../utils";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [goodQty, setGoodQty] = useState(0);
  const [goodId, setGoodId] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [openBills, setOpenBills] = useState([]);

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
      const storedOpenBills = await AsyncStorage.getItem("openBills");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setBill(storedBill ? JSON.parse(storedBill) : null);
      setClient(storedClient ? JSON.parse(storedClient) : null);
      setClients(storedClients ? JSON.parse(storedClients) : []);
      setOpenBills(storedOpenBills ? JSON.parse(storedOpenBills) : []);
    };
    loadStorageData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("user", JSON.stringify(user));
    AsyncStorage.setItem("bill", JSON.stringify(bill));
    AsyncStorage.setItem("client", JSON.stringify(client));
    AsyncStorage.setItem("clients", JSON.stringify(clients));
    AsyncStorage.setItem("openBills", JSON.stringify(openBills));
    AsyncStorage.setItem("selectedGoods", JSON.stringify(selectedGoods));
  }, [user, client, clients, selectedGoods, bill, openBills]);

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

  console.log("GlobalProvider: ", JSON.stringify(bill));
  console.log("GlobalProvider: ", JSON.stringify(openBills));

  const saveBill = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const billWithTitle = {
      ...bill,
      title: `Bill - ${currentTime}`,
      total_price: calculateTotal(bill.products),
    };
    setOpenBills((prevBills) => [...prevBills, billWithTitle]);
    setBill({ client_id: null, products: [] });
  };

  return (
    <GlobalContext.Provider
      value={{
        saveBill,
        user,
        setUser,
        bill,
        setBill,
        addClientToBill,
        addProductToBill,
        getTotalQuantity,
        client,
        setClient,
        goodId,
        setGoodId,
        clients,
        setClients,
        goodQty,
        setGoodQty,
        openBills,
        setOpenBills,
        selectedGoods,
        setSelectedGoods,
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
