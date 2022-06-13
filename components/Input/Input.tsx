import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, Text, TextInput, View, KeyboardType } from "react-native";

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  keyboardType: KeyboardType;
  value: string | number | undefined;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = ({
  icon,
  placeholder,
  keyboardType,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "95%",
          borderColor: "#222",
          borderWidth: 1,
          position: "relative",
        }}
      >
        <Ionicons
          name={icon}
          size={22}
          color={"#555"}
          style={{ position: "absolute", left: 5, top: 3 }}
        />
        <TextInput
          style={{ padding: 7, paddingLeft: 30 }}
          placeholderTextColor={"#555"}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value?.toString()}
          // keyboardType={"default"}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
