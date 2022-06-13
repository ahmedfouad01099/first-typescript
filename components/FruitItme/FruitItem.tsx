import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fruit } from "../../data";

const FruitItem: FC<Fruit> = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "30%" }}>
        <Text>{name}</Text>
      </View>
      <View style={{ width: "30%" }}>
        <Text>{price} $</Text>
      </View>
    </View>
  );
};

export default FruitItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    padding: 10,
  },
});
