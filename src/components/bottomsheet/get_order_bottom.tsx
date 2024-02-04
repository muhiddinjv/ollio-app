import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { clock, clock_1, dollar_1, down, remove } from "../../contants/icons";
import BottomItem from "./bottomItem";
import BottomItem2 from "./bottomItem2";
const GetOrderBottomSheet = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal} style={{ flexDirection: "row" }}>
        <Image
          source={clock}
          style={{
            height: 22,
            width: 22,
            tintColor: "black",
            marginHorizontal: 8,
          }}
        />
        <Text>Pending</Text>
        <Image
          source={down}
          style={{
            height: 24,
            width: 24,
            tintColor: "grey",
            marginHorizontal: 8,
          }}
        />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        onBackdropPress={toggleModal}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={{ backgroundColor: "white", padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "black", fontWeight: "700" }}>
              Select a status
            </Text>
            <TouchableOpacity>
              <Image source={remove} style={{ height: 36, width: 36 }} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginVertical: 8,
              color: "grey",
            }}
          >
            Your customers will be notified of each status change
          </Text>
          <BottomItem2 title={"Pending"} icon={clock} iconColor={"black"} />
          <BottomItem
            title={"Confirmed"}
            icon={clock_1}
            iconColor={"#4CAF50"}
          />

          <BottomItem
            title={"Ready for pick up"}
            icon={clock_1}
            iconColor={"#4CAF50"}
          />

       
        </View>
      </Modal>
    </View>
  );
};

export default GetOrderBottomSheet;
