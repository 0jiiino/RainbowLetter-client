import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";

const AuthButton = ({ source, handleClick }) => {
  return (
    <TouchableOpacity onPressOut={handleClick}>
      <Image source={source} style={styles.img} />
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  img: {
    width: WINDOW_WIDTH / 2.8,
    height: WINDOW_HEIGHT / 5,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: "contain",
  },
});
