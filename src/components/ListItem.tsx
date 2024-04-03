import { useState } from "react";
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { Divider, List, Text } from "react-native-paper";
import { MainColors } from "../theme";
import { CenteredCheckbox } from "./CenteredCheckbox";

interface IListItem {
  title: string;
  description?: string;
  variant?: string;
  price?: number;
  editable?: boolean;
  navigate?: any;
}

const ListItem = ({
  title,
  description,
  variant,
  price,
  editable,
  navigate,
}: IListItem) => {
  const { colorScheme } = useColorScheme();

  return (
    <List.Section className="m-0">
      <List.Item
        title={title}
        titleStyle={{
          color: MainColors.icon[colorScheme],
          fontWeight: "bold",
        }}
        description={description}
        descriptionStyle={{
          color: MainColors.icon[colorScheme],
        }}
        onPress={() => editable && navigate("EditItem")}
        left={(props) => (
          <List.Image
            style={props.style}
            source={require("../../assets/strawberries.jpg")}
          />
        )}
        right={() => {
          if (variant === "checkbox") {
            return <CenteredCheckbox />;
          } else {
            return (
              <View className="justify-center">
                <Text className="text-lg dark:text-white">{price}</Text>
              </View>
            );
          }
        }}
      />
      <Divider />
    </List.Section>
  );
};

export default ListItem;
