import { FAB, Text } from "react-native-paper";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { MainColors } from "../theme";
import { getToken } from "../screens/Auth/astorage";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/instance";
import { View } from "react-native";
import axios from "axios";

interface IFABplus {
  visible: boolean; 
  navigate: any; 
  changeTabIndex: (index: number) => void;
}

export const FABplus = ({ visible, changeTabIndex }: IFABplus) => {
  const queryClient = useQueryClient();
  const catalogIds = queryClient.getQueryData<string[]>(['catalogIds']) || [];
  const { colorScheme } = useColorScheme();
  const [ open, setOpen ] = useState<boolean>(false);

  const addToGoodsMutation = useMutation<void, Error, void>({
    mutationFn: async () => {
      const accessToken = await getToken();
      await axiosInstance.post('goods', { catalogIds }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
    },
    onSuccess: () => {
      changeTabIndex(1);
      queryClient.invalidateQueries(['goods'] as any);
    },
    onError: (error: any) => {
      // console.log('error :>> ', error.response.data.message[0].text);
      // return error.response.data.message[0].text

      const customErrorMessage = error.response?.data?.message || 'An error occurred';
      // console.log('error :>> ', customErrorMessage);
      return customErrorMessage;
    }
  });
console.log('addToGoodsMutation.isIdle :>> ', addToGoodsMutation.error);
  return (
    <>
      {addToGoodsMutation.isError && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white' }}>
            {addToGoodsMutation.error.message || 'An error occurred'}
          </Text>
        </View>
      )}
      <FAB.Group
        color={MainColors.plusText[colorScheme]}
        fabStyle={{ backgroundColor: MainColors.plus[colorScheme] }}
        backdropColor="#00000090"
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          { icon: "check-bold", label: "Check all", labelTextColor: "white", onPress: () => {} },
          { icon: "plus-box", label: "Add item", labelTextColor: "white", onPress: () => {} },
          { icon: "arrow-right-bold", label: "Add to goods", labelTextColor: "white", onPress: () => addToGoodsMutation.mutate() },
        ]}
        onStateChange={({ open }) => setOpen(open)}
        visible={visible}
      />
    </>
  );
};