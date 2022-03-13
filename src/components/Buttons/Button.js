import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, handleClick, style, disabled = false }) => {
  return (
    <TouchableOpacity
      onPressOut={handleClick}
      style={style}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
