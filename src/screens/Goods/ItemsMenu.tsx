import { View, TouchableOpacity, FlatList } from "react-native";
import { Divider, Icon, Text } from "react-native-paper";
import { useColorScheme } from "nativewind";

import { INavigation } from "../../utils/interfaces";
import { MainColors } from "../../theme";
import { homePages } from "../../utils/data";

function SingleItem({ item, navigate }: any) {
  const { colorScheme } = useColorScheme();
  return (
    <TouchableOpacity
      className="ml-1 flex-row items-center p-3"
      onPress={() => navigate(item.screen)}
    >
      <Icon size={23} source={item.icon} color={MainColors.icon[colorScheme]} />
      <Text className="ml-7 flex-grow text-slate-800 text-lg dark:text-white">
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const ItemsMenu = ({ navigation }: INavigation) => {
  return (
    <View className="h-full bg-white dark:bg-slate-800">
      <FlatList
        data={homePages}
        alwaysBounceVertical={false}
        ItemSeparatorComponent={Divider}
        renderItem={({ item, index }: any) => (
          <SingleItem key={index} item={item} navigate={navigation.navigate} />
        )}
      />
    </View>
  );
};

export default ItemsMenu;
