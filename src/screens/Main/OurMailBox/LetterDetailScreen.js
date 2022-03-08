import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Button from "../../../components/Buttons/Button";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";

const LetterDetail = ({ route }) => {
  const { letter } = route.params;
  const { nickname } = useSelector((state) => state.user);
  const [isCreator, setIsCreator] = useState(nickname === letter.creator);

  const handleReplyClick = () => {
    console.log(letter.title, letter.content, letter.creator);
  };

  return (
    <View style={styles.container}>
      <View style={styles.letterContainer}>
        <ScrollView>
          <Text style={styles.title}>{letter.title}</Text>
          <Text style={styles.content}>{letter.content}</Text>
          <View style={styles.fromContainer}>
            <Text style={styles.from}>From. {letter.creator}</Text>
          </View>
        </ScrollView>
      </View>
      {isCreator ? null : (
        <Button
          text="답장하기"
          handleClick={handleReplyClick}
          style={styles.button}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDDD",
  },
  letterContainer: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEIGHT * 0.7,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#EEECCC",
  },
  button: {
    width: WINDOW_WIDTH * 0.2,
    height: 30,
    marginTop: 10,
    backgroundColor: "#C7C5A7",
    borderRadius: 5,
    justifyContent: "center",
  },
  title: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
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
    borderTopWidth: 0.5,
  },
  from: {
    fontSize: 15,
  },
});

export default LetterDetail;
