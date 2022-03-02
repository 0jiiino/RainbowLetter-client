import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, handleClick, style }) => {
  return (
    <TouchableOpacity onPressOut={handleClick} style={style}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
