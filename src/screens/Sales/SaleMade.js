import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Platform } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import axiosInstance from "../Auth/axiostance";
import { useGlobalState } from "../../hooks";
import { Skeleton } from "react-native-skeletons";
import { ActivityIndicator } from "react-native";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { getAccessToken } from "../Auth/astorage";
import { formattedDate } from "../../utils";

const SaleMade = ({ navigation }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const { billItem, loading, fetchBills } = useGlobalState();
  const {colors: { primary, backdrop }} = useTheme();

  const handleDownload = async () => {
    try {
      const accessToken = await getAccessToken();
      const date = formattedDate(billItem?.created_at);
      const filename = `bill_${date}.pdf`;
      const pdfUrl = `https://ollioapi.vercel.app/bills/pdf/${billItem?._id}`;

      const result = await FileSystem.downloadAsync(
        pdfUrl, FileSystem.documentDirectory + filename,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      await shareAsync(result.uri);
    } catch (error) {
      Alert.alert("Error", `Failed to download PDF: ${error.message}`);
    }
  };

  const handleSale = async () => {
    setPayLoading(true);
    try {
      const response = await axiosInstance.post(`/bills/pay/${billItem?._id}`);
      if (response.data.success) {
        setIsPaid(true);
        fetchBills();
      } else {
        Alert.alert("Error", "Failed to process sale.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        `Error processing sale: ${
          error.response ? error.response.data : error.message
        }`
      );
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
          <MaterialIcons
            name="check-circle"
            size={120}
            color={isPaid ? primary : backdrop}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            icon={isPaid ? "plus" : "check"}
            style={styles.button}
            disabled={loading || payLoading}
            labelStyle={{ fontSize: 18, lineHeight: 26 }}
            onPress={isPaid ? () => navigation.navigate("Sales") : handleSale}
          >
            {isPaid ? "Yangi savdo" : "Sotish"}
          </Button>
          <Button
            mode="outlined"
            icon={isPaid ? "download" : "cancel"}
            style={styles.button}
            disabled={loading || payLoading}
            labelStyle={{ fontSize: 18, lineHeight: 26 }}
            onPress={handleDownload}
          >
            {isPaid ? "Chek yuklash" : "Bekor qilish"}
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 50,
    height: "89%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalWrapper: {
    alignItems: "center",
    gap: 10,
  },
  totalAmount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#444",
  },
  totalLabel: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    gap: 20,
    width: "100%",
    flexDirection: "column",
  },
  button: {
    marginHorizontal: 10,
  },
  shimmer: {
    width: 150,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default SaleMade;
