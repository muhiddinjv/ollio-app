import { View, Platform } from "react-native";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../Auth/astorage";
import axiosInstance from "../Auth/axiostance";
import { GlobalContext } from "../../utils";
import { TextInput } from "react-native-paper";
import Header from "../../components/Header";
import { useGlobalState } from "../../hooks/useGlobalState";

const GoodQty = ({ navigation }) => {
  const { goodId, setGoodQty, goodQty } = useGlobalState();
  const [title, setTitle] = useState();

  const goodsQuery = useQuery({
    queryKey: ["good", goodId],
    queryFn: async () => {
      const accessToken = await getAccessToken();
      const response = await axiosInstance.get(`stock/${goodId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (goodsQuery?.data) {
      setTitle(goodsQuery?.data.title);
    }
  }, [goodsQuery?.data, goodId]);

  return (
    <View>
      <Header
        title={title}
        fontSize={18}
        iconRight="content-save"
        navigation={navigation}
        backBtn
      />
      <TextInput
        onChangeText={(qty) => setGoodQty(qty)}
        value={goodQty}
        returnKeyType="done"
        onSubmitEditing={() => navigation.navigate("Sales")}
        keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
        placeholder="0"
        className="text-2xl"
        autoFocus
      />
    </View>
  );
};

export default GoodQty;
