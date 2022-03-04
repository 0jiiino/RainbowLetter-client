import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const CircleButton = ({ color, size, disabled = false, handleClick }) => {
  return (
    <TouchableOpacity
      style={disabled ? styles.disabledCircle : styles.circle}
      disabled={disabled}
      onPressOut={handleClick}
    >
      <MaterialCommunityIcons
        name="checkbox-blank-circle"
        size={size}
        color={color}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  disabledCircle: {
    marginLeft: 5,
    marginRight: 5,
    opacity: 0.3,
  },
  circle: {
    marginLeft: 5,
    marginRight: 5,
  },
});
