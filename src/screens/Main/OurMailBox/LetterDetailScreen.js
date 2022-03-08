import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import Button from "../../../components/Buttons/Button";
import LetterContainer from "../../../components/Letter/LetterDetail";
import { WINDOW_WIDTH } from "../../../constants/constants";

const LetterDetail = ({ route }) => {
  const { letter } = route.params;
  const navigation = useNavigation();
  const { nickname } = useSelector((state) => state.user);
  const [isCreator, setIsCreator] = useState(nickname === letter.creator);

  const handleReplyClick = () => {
    navigation.navigate("Reply", { letter });
  };

  return (
    <View style={styles.container}>
      <LetterContainer letter={letter} />
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
