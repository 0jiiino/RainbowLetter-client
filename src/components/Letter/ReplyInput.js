import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { putReply } from "../../../api/letterApi";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants/constants";
import Button from "../Buttons/Button";

const ReplyInput = ({ id, sethasError, setIsSuccess }) => {
  const [reply, setReply] = useState("");

  const handleSendClick = async () => {
    const response = await putReply(id, reply);

    Keyboard.dismiss();

    if (response.error) {
      sethasError(true);

      return;
    }

    setIsSuccess(true);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <ScrollView>
            <TextInput
              placeholder="전하고 싶은 내용을 입력하세요"
              multiline={true}
              onChangeText={(event) => setReply(event)}
              style={styles.content}
            />
          </ScrollView>
          <Button
            text="보내기"
            handleClick={handleSendClick}
            style={styles.button}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ReplyInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  inputContainer: {
    alignItems: "center",
    marginHorizontal: (WINDOW_WIDTH * 0.05) / 2,
  },
  content: {
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.65,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#EEECCC",
    textAlignVertical: "top",
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
