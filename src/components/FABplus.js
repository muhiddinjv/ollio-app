import { FAB, Text, useTheme } from "react-native-paper";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { MainColors } from "../theme";
import { getAccessToken } from "../screens/Auth/astorage";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/instance";
import { View } from "react-native";


const FABplus = ({ visible, changeTabIndex }) => {
  const queryClient = useQueryClient();
  const catalogIds = queryClient.getQueryData(['catalogIds']) || [];
  const { colorScheme } = useColorScheme();
  const [ open, setOpen ] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { colors } = useTheme();

  const addToGoodsMutation = useMutation({
    mutationFn: async () => {
      const accessToken = await getAccessToken();
      await axiosInstance.post('goods', { catalogIds }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    },
    onSuccess: () => {
      changeTabIndex(1);
      queryClient.invalidateQueries(['goods']);
      setErrorMessage(null);
    },
    onError: (error) => {
      setErrorMessage(error.response.data.message[0].text);
      setTimeout(() => setErrorMessage(null), 5000);
    }
  });
  
  return (
    <>
      {errorMessage && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white' }}>
          {errorMessage}
          </Text>
        </View>
      )}
      <FAB.Group
        color={MainColors.text[colorScheme]}
        fabStyle={{ backgroundColor: colors.primary }}
        backdropColor="#00000090"
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          { icon: "check-bold", label: "Check all", labelTextColor: "white", onPress: () => {} },
          { icon: "plus-box", label: "Add a good", labelTextColor: "white", onPress: () => {} },
          { icon: "arrow-right-bold", label: "Add to goods", labelTextColor: "white", onPress: () => addToGoodsMutation.mutate() },
        ]}
        onStateChange={({ open }) => setOpen(open)}
        visible={visible}
      />
    </>
  );
};
export default FABplus;