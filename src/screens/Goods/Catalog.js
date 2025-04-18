import { ScrollView, View } from "react-native";
import ListItem from "../../components/ListItem";
import { MainColors } from "../../theme";
import { ActivityIndicator, Text } from "react-native-paper";
import { useGlobalState, useCatalog } from "../../hooks";

const Catalog = () => {
  const { selectedGoods, setSelectedGoods } = useGlobalState();
  const { data, isLoading, isError } = useCatalog();

  const catalogItems = data || [];

  const handleToggleItem = (item) => {
    setSelectedGoods((prev) => {
      const isSelected = prev.find((p) => p.product_id === item._id);
      if (isSelected) {
        return prev.filter((p) => p.product_id !== item._id);
      }
      return [...prev, { product_id: item._id, title: item.title, price: 0, cost: 0, quantity: 0 }];
    });
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator animating={true} color={MainColors.primary} size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl text-red-500">Error fetching data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {catalogItems?.map((item) => (
        <ListItem
          key={item._id}
          title={item.title}
          description="Tovar haqida qisqacha ma'lumot"
          variant="CheckBox"
          checked={selectedGoods.some((p) => p.product_id === item._id)}
          onChange={() => handleToggleItem(item)}
        />
      ))}
    </ScrollView>
  );
};
export default Catalog;