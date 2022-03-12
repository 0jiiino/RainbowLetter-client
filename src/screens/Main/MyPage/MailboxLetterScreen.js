import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Carousel from "../../../components/Carousel/Carousel";
import ColorLetter from "../../../components/Letter/ColorLetter";
import { QUESTION_COLORS } from "../../../constants/questions";

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

    return <ColorLetter letter={item} color={color} />;
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
});
