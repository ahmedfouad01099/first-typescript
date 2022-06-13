import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FruitItem from "./components/FruitItme/FruitItem";
import Input from "./components/Input/Input";
import { Fruit, Fruits } from "./data";

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fruits, setFruits] = useState<Fruit[] | null>(null);

  const [showAddSec, setShowAddSec] = useState<boolean>(false);
  const [fruitName, setFruitName] = useState<string>("");
  const [fruitPrice, setFruitPrice] = useState<number>(0);
  console.log("24", { fruitName, fruitPrice });

  useEffect(() => {
    (() => {
      setFruits(
        Fruits.sort((a: Fruit, b: Fruit) => {
          return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
        })
      );
    })();
  }, []);

  const handleSearch = (txt: string) => {
    setSearchQuery(txt);
    const fruits: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(txt));

    setFruits(fruits);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 30,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <Input
          placeholder="Search"
          icon="md-search"
          value={searchQuery}
          onChangeText={(txt) => handleSearch(txt)}
          keyboardType={"default"}
        />
        <View
          style={{
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={fruits}
            renderItem={(item) => (
              <FruitItem
                id={item.item.id}
                name={item.item.name}
                price={item.item.price}
              />
            )}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: "10%", width: "100%" }}>
        {showAddSec ? (
          <View style={{ width: "100%" }}>
            <Ionicons
              name="close"
              color={"#000"}
              size={22}
              style={{ position: "absolute", right: 30 }}
              onPress={() => setShowAddSec(false)}
            />

            <View style={{ width: "100%", marginTop: 15 }}>
              <Input
                icon="ios-add-circle-outline"
                placeholder="Fruit Name"
                value={fruitName}
                onChangeText={(txt) => setFruitName(txt)}
                keyboardType={"default"}
              />

              <Input
                icon="ios-add-circle-outline"
                placeholder="Fruit Name"
                value={fruitPrice}
                onChangeText={(txt) => {
                  const re = /^[0-9\b]+$/;

                  if (txt === "") {
                    setFruitPrice(0);
                  }
                  if (re.test(txt)) {
                    setFruitPrice(parseFloat(txt));
                  }
                }}
                keyboardType={"decimal-pad"}
              />

              <Button
                title="Add"
                onPress={() => {
                  const newFruitsArr = {
                    id: Math.random(),
                    name: fruitName,
                    price: fruitPrice,
                  };

                  if (newFruitsArr !== null && fruits !== null) {
                    setFruits([...fruits, newFruitsArr]);
                  }
                }}
              />
            </View>
          </View>
        ) : null}

        {showAddSec ? null : (
          <Button title="Add" onPress={() => setShowAddSec(true)} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
