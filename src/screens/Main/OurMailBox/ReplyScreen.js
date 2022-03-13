import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Carousel from "../../../components/Carousel/Carousel";
import LetterContainer from "../../../components/Letter/LetterDetail";
import ReplyInput from "../../../components/Letter/ReplyInput";
import Modal from "../../../components/Modal/Modal";
import {
  MESSAGE,
  MODAL_TITLE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../../constants/constants";

const Reply = ({ route }) => {
  const navigation = useNavigation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { letter } = route.params;

  const data = [letter, {}];

  const handleConfirmClick = () => {
    if (isSuccess) {
      setIsSuccess(false);
      navigation.navigate("OurMailBox");

      return;
    }

    setHasError(false);
  };

  const renderItem = ({ item }) => {
    const isEmpty = Object.keys(item).length;

    return isEmpty ? (
      <LetterContainer letter={item} style={styles.letterContainer} />
    ) : (
      <ReplyInput
        id={letter._id}
        sethasError={setHasError}
        setIsSuccess={setIsSuccess}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel data={data} renderItem={renderItem} />
      {isSuccess ? (
        <Modal
          title={MODAL_TITLE.SEND_SUCCESS}
          isInputModal={false}
          handleCloseClick={() => setIsSuccess(false)}
          handleConfirmClick={handleConfirmClick}
          content={MESSAGE.SUCCESS_MESSAGE}
        />
      ) : null}
      {hasError ? (
        <Modal
          title={MODAL_TITLE.SEND_FAIL}
          isInputModal={false}
          handleCloseClick={() => setHasError(false)}
          handleConfirmClick={handleConfirmClick}
          content={MESSAGE.FAILURE_MESSAGE}
        />
      ) : null}
    </View>
  );
};

export default Reply;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFDDD",
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
});
