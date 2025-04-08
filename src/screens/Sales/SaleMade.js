import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";

const SaleMade = ({ navigation }) => {
  const { colors } = useTheme();

  const totalAmount = "UZS 98,000";

  const handleDownload = () => {
    navigation.navigate("Sales");
  };

  return (
    <View style={styles.container}>
      <Header title="" fontSize={20} />
      <View style={styles.content}>
        <View style={styles.totalWrapper}>
            <Text style={styles.totalAmount}>{totalAmount}</Text>
            <Text style={styles.totalLabel}>Total amount</Text>
        </View>
        <MaterialIcons name="check" size={100} color={colors.primary} />
        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            icon="download"
            style={styles.button}
            labelStyle={{ fontSize: 20, lineHeight: 26 }}
            onPress={handleDownload}
          >
            Yuklab olish
          </Button>
          <Button
            mode="contained"
            icon="plus"
            style={styles.button}
            labelStyle={{ fontSize: 20, lineHeight: 26 }}
            onPress={() => navigation.navigate("Sales")}
          >
            Yangi Savdo
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
});

export default SaleMade;
