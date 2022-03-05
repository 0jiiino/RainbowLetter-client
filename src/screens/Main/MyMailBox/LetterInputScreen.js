import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchLetter } from "../../../../redux/userSlice";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";
import Button from "../../../components/Buttons/Button";
import CircleButton from "../../../components/Buttons/CircleButton";

const LetterInput = ({ route }) => {
  const { color, question } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { angel, nickname, isLoading } = useSelector((state) => state.user);

  const handleSaveClick = () => {
    const letterInfo = {
      id: angel.id,
      nickname,
      title,
      content,
    };

    dispatch(fetchLetter(letterInfo));

    if (!isLoading) {
      navigation.navigate("LetterList");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.questionContainer}>
            <CircleButton color={color} size={90} />
            <Text>{question}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="편지의 제목을 입력하세요"
              onChangeText={(event) => setTitle(event)}
              style={styles.title}
            />
            <ScrollView>
              <TextInput
                placeholder="전하고 싶은 내용을 입력하세요"
                multiline={true}
                onChangeText={(event) => setContent(event)}
                style={styles.content}
              />
            </ScrollView>
            <Button
              text="저장"
              handleClick={handleSaveClick}
              style={styles.button}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LetterInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
  },
  title: {
    width: WINDOW_WIDTH * 0.9,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#C7C5A7",
    borderBottomWidth: 1.5,
  },
  content: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEIGHT * 0.5,
    padding: 10,
    borderColor: "#C7C5A7",
    borderWidth: 1.5,
    borderRadius: 10,
    textAlignVertical: "top",
  },
  button: {
    width: WINDOW_WIDTH * 0.2,
    height: 30,
    marginTop: 10,
    backgroundColor: "#C7C5A7",
    borderRadius: 5,
    justifyContent: "center",
  },
});
