import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "../../../components/Buttons/Button";
import LetterContainer from "../../../components/Letter/LetterDetail";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";

const LetterDetail = ({ route }) => {
  const { letter } = route.params;
  const navigation = useNavigation();
  const { nickname } = useSelector((state) => state.user);
  const isCreator = nickname === letter.creator;

  const handleReplyClick = () => {
    navigation.navigate("Reply", { letter });
  };

  return (
    <View style={styles.container}>
      <LetterContainer letter={letter} style={styles.letterContainer} />
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
    borderRadius: 10,
    backgroundColor: "#EEECCC",
  },
  button: {
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.2,
    height: 30,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#C7C5A7",
  },
});

export default LetterDetail;
