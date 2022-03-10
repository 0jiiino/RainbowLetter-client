import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import cupid from "../../../assets/Images/cupid.png";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";
import Button from "../Buttons/Button";

const Angel = ({ name, handleDeleteClick, handleClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={handleClick}>
        <Image source={cupid} style={styles.image} />
        <Text style={styles.text}>{name} ෆ</Text>
      </TouchableOpacity>
      <Button
        text="삭제"
        handleClick={handleDeleteClick}
        style={styles.button}
      />
    </View>
  );
};

export default Angel;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.4,
    height: WINDOW_HEIGHT * 0.4,
    marginHorizontal: 10,
  },
  image: {
    width: WINDOW_WIDTH * 0.35,
    height: WINDOW_HEIGHT * 0.25,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.15,
    height: WINDOW_HEIGHT * 0.04,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#C7C5A7",
  },
});
