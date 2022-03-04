import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import angelImg from "../../../../assets/Images/angel.png";
import { fetchLetters } from "../../../../redux/userSlice";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";

const Angel = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { angel, isLoading } = useSelector((state) => state.user);

  const handleAngelClick = () => {
    dispatch(fetchLetters(angel.id));

    if (!isLoading) {
      navigation.navigate("LetterList");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={handleAngelClick}>
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
