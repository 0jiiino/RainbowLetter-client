import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";

const Input = ({
  placeholder,
  value,
  handleInputChange,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT * 0.08,
    marginLeft: 30,
    borderBottomColor: "#313119",
  },
  textInput: {
    width: WINDOW_WIDTH * 0.6,
    borderBottomWidth: 1,
    textAlign: "center",
  },
});
