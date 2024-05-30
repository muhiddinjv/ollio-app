import React from "react"; // Ensure React is in scope when using JSX
import { View } from "react-native";
import { useColorScheme } from "nativewind";
import { Divider, List, Text } from "react-native-paper";
import { MainColors } from "../theme";
import { CenteredCheckbox } from "./CenteredCheckbox";
import { GlobalContext } from "../../App";

const ListItem = ({
  goodId,
  title,
  description,
  variant,
  price,
  editable,
  navigate,
  checked,
  onChange,
}) => {
  const { colorScheme } = useColorScheme();
  const { setGoodId } = React.useContext(GlobalContext);

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
        onPress={() => {
          setGoodId(goodId)
          if(editable){
            navigate('GoodEdit'); 
          }
        }
        }
        left={(props) => (
          <List.Image
            style={props.style}
            source={require("../../assets/icon.png")}
          />
        )}
        right={() => {
          if (variant === "checkbox") {
            return <CenteredCheckbox checked={checked} onChange={onChange} />;
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