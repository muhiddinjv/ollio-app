import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

import { getItem, getTokens, setItem } from '../api/astorage';
import { formatError, formattedDate } from '../utils';
import { useAuth } from '../screens/Auth/AuthPro';
import axiosInstance from '../api/axiostance';


const GlobalContext = createContext();

export function GlobalProvider({ children }) {
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
  const queryClient = useQueryClient();

  useEffect(() => {
    const loadStorageData = async () => {
      const storedBill = await getItem('bill');
      const storedClient = await getItem('client');
      const storedClients = await getItem('clients');
      const storedBillItem = await getItem('billItem');
      setBill(storedBill ? JSON.parse(storedBill) : null);
      setClient(storedClient ? JSON.parse(storedClient) : null);
      setClients(storedClients ? JSON.parse(storedClients) : []);
      setBillItem(storedBillItem ? JSON.parse(storedBillItem) : null);
    };
    loadStorageData();
  }, []);

  useEffect(() => {
    setItem('bill', JSON.stringify(bill));
    setItem('client', JSON.stringify(client));
    setItem('clients', JSON.stringify(clients));
    setItem('billItem', JSON.stringify(billItem));
    setItem('selectedGoods', JSON.stringify(selectedGoods));
  }, [client, clients, selectedGoods, bill, openBills, billItem]);

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
    return bill?.products?.reduce((total, product) => total + product.quantity, 0);
  };

  const checkStockQuantity = async (productId, quantity) => {
    try {
      const response = await axiosInstance.post('stock/checkqty', { _id: productId, quantity });
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error checking stock quantity:', error);
      throw error; // Rethrow the error for handling in the calling function
    }
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
      const { data: { success, message, bill } } = await axiosInstance.post('bills', billData);
      if (success) {
        setBill({ client_id: null, products: [] });
        setBillItem(bill);
        queryClient.invalidateQueries('bills');
      } else {
        Alert.alert('Error', `Failed to create bill: ${message}`);
      }
    } catch (error) {
      Alert.alert('Error', `Error creating bill: ${formatError(error)}`);
      // const errorMessage = JSON.parse(error.response.data.message).map(item =>
      //   `Product: ${item.Product}, Requested: ${item.Requested}, Available: ${item.Available}`
      // ).join('\n');
      // Alert.alert("Error", `Error creating bill: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line no-shadow
  const downloadBill = async bill => {
    try {
      if (bill.status === 'paid') {
        const tokens = await getTokens();
        const date = formattedDate(bill?.created_at);
        const filename = `bill_${date}.pdf`;
        const pdfUrl = `https://ollioapi.vercel.app/bills/pdf/${bill?._id}`;
        const result = await FileSystem.downloadAsync(pdfUrl, FileSystem.documentDirectory + filename, {
          headers: { Authorization: `Bearer ${tokens.access}` },
        });
        await shareAsync(result.uri);
      } else {
        Alert.alert('Hato', "Chek to'lanmagan");
      }
    } catch (error) {
      Alert.alert('Hato', `Checkni yuklashda xatolik: ${formatError(error)}`);
    }
  };

  const deleteBill = useCallback(
    billId => {
      Alert.alert(
        'Chekni o\'chirish',
        'Shu chekni o\'chirishni xohlaysizmi?',
        [
          {
            text: 'Bekor qilish',
            style: 'cancel',
          },
          {
            text: 'O\'chirish',
            onPress: async () => {
              try {
                await axiosInstance.delete(`bills/${billId}`);
                queryClient.invalidateQueries('bills');
              } catch (error) {
                Alert.alert('Xatolik:', formatError(error));
              }
            },
          },
        ],
        { cancelable: true }
      );
    },
    [queryClient]
  );

  return (
    <GlobalContext.Provider
      value={{
        saveBill,
        deleteBill,
        downloadBill,
        bill,
        setBill,
        addClientToBill,
        addProductToBill,
        getTotalQuantity,
        checkStockQuantity,
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
        // query client provider stuff below
        // data, isRefreshing, onRefresh, isFetchingNextPage, refetch,
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
