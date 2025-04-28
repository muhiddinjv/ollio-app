import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import { getAccessToken } from '../api/astorage';
import axiosInstance from '../api/axiostance';
import { formattedDate } from '../utils';

export const useInfiniteScroll = ({ key, url, limit = 25, page = 1, userId = null, filters = {} }) => {
  const queryKey = [
    ...key,
    userId,
    ...Object.entries(filters)
      .filter(([, value]) => value) // Keep only entries with truthy values
      // eslint-disable-next-line no-shadow
      .map(([key]) => key), // Extract the keys
  ];

  const [isRefreshing, setIsRefreshing] = useState(false);

  const queryFn = async () => {
    const accessToken = await getAccessToken();
    const { data } = await axiosInstance.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        page,
        limit,
        ...filters,
      },
    });

    return { data, nextPage: page + 1 };
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery({
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
    // eslint-disable-next-line no-unused-expressions
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
    // eslint-disable-next-line no-shadow
    return data?.pages.flatMap(page => page.data) || [];
  }, [data?.pages]);

  return {
    refetch,
    data: flattenData,
    onEndReached: loadNext,
    isRefreshing,
    onRefresh,
    isFetchingNextPage,
  };
};

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [goodQty, setGoodQty] = useState(0);
  const [goodId, setGoodId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [billItem, setBillItem] = useState(null);
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [openBills, setOpenBills] = useState([]);
  const [bill, setBill] = useState({
    client_id: null,
    products: [],
  });

  useEffect(() => {
    const loadStorageData = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      const storedBill = await AsyncStorage.getItem('bill');
      const storedClient = await AsyncStorage.getItem('client');
      const storedClients = await AsyncStorage.getItem('clients');
      const storedBillItem = await AsyncStorage.getItem('billItem');
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setBill(storedBill ? JSON.parse(storedBill) : null);
      setClient(storedClient ? JSON.parse(storedClient) : null);
      setClients(storedClients ? JSON.parse(storedClients) : []);
      setBillItem(storedBillItem ? JSON.parse(storedBillItem) : null);
    };
    loadStorageData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('user', JSON.stringify(user));
    AsyncStorage.setItem('bill', JSON.stringify(bill));
    AsyncStorage.setItem('client', JSON.stringify(client));
    AsyncStorage.setItem('clients', JSON.stringify(clients));
    AsyncStorage.setItem('billItem', JSON.stringify(billItem));
    AsyncStorage.setItem('selectedGoods', JSON.stringify(selectedGoods));
  }, [user, client, clients, selectedGoods, bill, openBills, billItem]);

  const scrollProps = useInfiniteScroll({ url: 'bills', limit: 25, userId: user?._id, key: ['bills'] });

  const addClientToBill = clientId => {
    setBill(prevBill => ({
      ...prevBill,
      client_id: clientId,
    }));
  };

  const addProductToBill = (productId, quantity, title, price) => {
    setBill(prevBill => {
      const existingProductIndex = prevBill.products.findIndex(p => p.product_id === productId);
      if (existingProductIndex > -1) {
        // If the product already exists, update the quantity
        const updatedProducts = [...prevBill.products];
        updatedProducts[existingProductIndex].quantity += quantity;
        return { ...prevBill, products: updatedProducts };
      }
      // If the product does not exist, add it to the list
      return {
        ...prevBill,
        products: [...prevBill.products, { product_id: productId, quantity, title, price }],
      };
    });
  };

  const getTotalQuantity = () => {
    return bill.products.reduce((total, product) => total + product.quantity, 0);
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
      const response = await axiosInstance.post('/bills', billData);
      if (response.data.success) {
        setBill({ client_id: null, products: [] });
        setBillItem(response.data.bill);
        refetch();
      } else {
        Alert.alert('Error', `Failed to create bill: ${response.data.message}`);
      }
    } catch (error) {
      if (error.response.data.message) {
        const errorMessage = JSON.parse(error.response.data.message)
          .map(item => `Product: ${item.Product}, Requested: ${item.Requested}, Available: ${item.Available}`)
          .join('\n');
        Alert.alert('Error', `Error creating bill: ${errorMessage}`);
      } else {
        Alert.alert('Error', `Error creating bill: ${error.response.data}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line no-shadow
  const downloadBill = async bill => {
    try {
      if (bill.status === 'paid') {
        const accessToken = await getAccessToken();
        const date = formattedDate(bill?.created_at);
        const filename = `bill_${date}.pdf`;
        const pdfUrl = `https://ollioapi.vercel.app/bills/pdf/${bill?._id}`;
        const result = await FileSystem.downloadAsync(pdfUrl, FileSystem.documentDirectory + filename, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        await shareAsync(result.uri);
      } else {
        Alert.alert('Hato', "Chek to'lanmagan");
      }
    } catch (error) {
      Alert.alert('Hato', `Failed to download PDF: ${error.message}`);
    }
  };

  const deleteBill = async billId => {
    Alert.alert(
      'Delete Bill',
      'Are you sure you want to delete this bill?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              await axiosInstance.delete(`/bills/${billId}`);
              refetch();
            } catch (error) {
              console.error('Error deleting bill:', error.response ? error.response.data : error.message);
              throw error;
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        saveBill,
        deleteBill,
        scrollProps,
        downloadBill,
        user,
        setUser,
        bill,
        setBill,
        addClientToBill,
        addProductToBill,
        getTotalQuantity,
        loading,
        setLoading,
        client,
        setClient,
        goodId,
        setGoodId,
        clients,
        setClients,
        goodQty,
        setGoodQty,
        billItem,
        setBillItem,
        openBills,
        setOpenBills,
        selectedGoods,
        setSelectedGoods,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    console.error('GlobalContext is undefined! Ensure GlobalProvider is wrapping your component tree.');
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};

export const usePostGoods = () => {
  return useMutation(
    async goods => {
      const accessToken = await getAccessToken();
      const response = await axiosInstance.post('/stock/receive', goods, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data; // Return the response data
    },
    {
      onError: error => {
        console.error('Error during POST request:', error);
      },
    }
  );
};
