import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Carousel from "../../../components/Carousel/Carousel";
import LetterContainer from "../../../components/Letter/LetterDetail";
import ReplyInput from "../../../components/Letter/ReplyInput";
import Modal from "../../../components/Modal/Modal";
import { FAILURE_MESSAGE, SUCCESS_MESSAGE } from "../../../constants/constants";

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
      <LetterContainer letter={item} replyMode={true} />
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
          isInputModal={false}
          handleCloseClick={() => setIsSuccess(false)}
          handleConfirmClick={handleConfirmClick}
          content={SUCCESS_MESSAGE}
          title="전송 완료"
        />
      ) : null}
      {hasError ? (
        <Modal
          isInputModal={false}
          handleCloseClick={() => setHasError(false)}
          handleConfirmClick={handleConfirmClick}
          content={FAILURE_MESSAGE}
          title="전송 실패"
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
});