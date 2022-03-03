import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import angelImg from "../../../../assets/Images/angel.png";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants";

const Angel = () => {
  const { angel } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.image} source={angelImg} />
      </TouchableOpacity>
      <Text style={styles.text}>Dear. [ {angel.name}🧡 ]</Text>
    </View>
  );
};

export default Angel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDDD",
  },
  image: {
    width: WINDOW_WIDTH / 2,
    height: WINDOW_HEIGHT / 3,
  },
  text: {
    margin: 30,
    fontSize: 18,
    fontWeight: "700",
  },
});
