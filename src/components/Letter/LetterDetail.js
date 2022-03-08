import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";

const LetterContainer = ({ letter, replyMode = false }) => {
  const { title, content, creator } = letter;

  return (
    <View
      style={replyMode ? styles.replyModeContainer : styles.letterContainer}
    >
      <ScrollView>
        <Text style={styles.title}>[ {title} ]</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.fromContainer}>
          <Text style={styles.from}>From. {creator}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default LetterContainer;

const styles = StyleSheet.create({
  letterContainer: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEIGHT * 0.7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#EEECCC",
  },
  replyModeContainer: {
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: (WINDOW_WIDTH * 0.05) / 2,
    borderRadius: 10,
    backgroundColor: "#EEECCC",
  },
  title: {
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "900",
  },
  content: {
    fontSize: 15,
  },
  fromContainer: {
    alignItems: "flex-end",
    paddingTop: 10,
    marginTop: 10,
  },
  from: {
    fontSize: 15,
  },
});
