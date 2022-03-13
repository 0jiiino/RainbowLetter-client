import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Carousel from "../../../components/Carousel/Carousel";
import LetterContainer from "../../../components/Letter/LetterDetail";
import { QUESTION_COLORS } from "../../../constants/questions";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";

const MailboxLetter = () => {
  const { letters } = useSelector((state) => state.mailbox);
  let index;

  const renderItem = ({ item }) => {
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      if (letter.content === item.content) {
        index = i;
        break;
      }
    }
    const color = QUESTION_COLORS[index];

    return (
      <LetterContainer
        letter={item}
        style={{ ...styles.letterContainer, backgroundColor: color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel data={letters} renderItem={renderItem} />
    </View>
  );
};

export default MailboxLetter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  letterContainer: {
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: WINDOW_WIDTH * 0.025,
    borderRadius: 10,
  },
});
