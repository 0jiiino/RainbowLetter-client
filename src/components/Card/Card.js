import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import docs from "../../../assets/Images/docs.png";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";

const Card = ({ letter, onPress }) => {
  const { content, creator } = letter;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{creator} 로부터...</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content} ellipsizeMode="tail" numberOfLines={5}>
          {content}
        </Text>
      </View>
      <View style={styles.tail}>
        <TouchableOpacity style={styles.buttonContainer} onPressOut={onPress}>
          <Text style={styles.text}>더 읽어보기</Text>
          <Image source={docs} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEIGHT * 0.3,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "#EEECCC",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.8,
    borderBottomWidth: 1,
  },
  contentContainer: {
    flex: 6,
    justifyContent: "center",
  },
  tail: {
    flex: 1.5,
    alignItems: "flex-end",
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.8,
    borderTopWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: WINDOW_WIDTH * 0.3,
  },
  text: {
    fontWeight: "800",
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
  },
});
