import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import axiosInstance from "../../api/axiostance";
import { useGlobalState } from "../../hooks";
import { Skeleton } from "react-native-skeletons";
import { ActivityIndicator } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../Auth/AuthPro";
import { formatError } from "../../utils";

import axiosInstance from '../../api/axiostance';
import Header from '../../components/Header';
import { useGlobalState } from '../../hooks';

function SaleMade({ navigation }) {
  const [isPaid, setIsPaid] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const { billItem, setBillItem, downloadBill, loading } = useGlobalState();
  const {colors: { primary, backdrop }} = useTheme();
  const queryClient = useQueryClient();
  const { setSignedIn } = useAuth();

  const handleSale = async () => {
    setPayLoading(true);
    try {
      const response = await axiosInstance.post(`/bills/pay/${billItem?._id}`);
      if (response.data.success) {
        billItem.status = 'paid';
        setBillItem(billItem);
        setIsPaid(true);
        queryClient.invalidateQueries(["bills"]);
      } else {
        Alert.alert('Error', 'Failed to process sale.');
      }
    } catch (error) {
      Alert.alert("Error",`Error processing sale: ${formatError(error)}`);
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Savdo qilish" fontSize={20} />
      <View style={styles.content}>
        <View style={styles.totalWrapper}>
          {loading ? (
            <Skeleton width={100} height={40} />
          ) : (
            <Text style={styles.totalAmount}>{billItem?.total_price}</Text>
          )}
          <Text style={styles.totalLabel}>Umumiy summa</Text>
        </View>
        {payLoading ? (
          <ActivityIndicator size={100} color={primary} />
        ) : (
          <MaterialIcons name="check-circle" size={120} color={isPaid ? primary : backdrop} />
        )}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            icon={isPaid ? 'plus' : 'check'}
            style={styles.button}
            disabled={loading || payLoading}
            labelStyle={{ fontSize: 18, lineHeight: 26 }}
            onPress={isPaid ? () => navigation.navigate('Savdo') : handleSale}
          >
            {isPaid ? 'Yangi savdo' : 'Sotish'}
          </Button>
          <Button
            mode="outlined"
            icon={isPaid ? 'download' : 'arrow-left'}
            style={styles.button}
            disabled={loading || payLoading}
            labelStyle={{ fontSize: 18, lineHeight: 26 }}
            onPress={isPaid ? () => downloadBill(billItem) : () => navigation.navigate('Savdo')}
          >
            {isPaid ? 'Chek yuklash' : 'Qaytish'}
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 20,
    width: '100%',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    alignItems: 'center',
    height: '89%',
    justifyContent: 'space-between',
    padding: 50,
  },
  // shimmer: {
  //   borderRadius: 5,
  //   height: 40,
  //   marginVertical: 10,
  //   width: 150,
  // },
  totalAmount: {
    color: '#444',
    fontSize: 48,
    fontWeight: 'bold',
  },
  totalLabel: {
    color: '#666',
    fontSize: 16,
  },
  totalWrapper: {
    alignItems: 'center',
    gap: 10,
  },
});

export default SaleMade;
