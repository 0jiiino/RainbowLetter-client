import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import angelImg from "../../../../assets/Images/angel.png";
import { fetchAngel } from "../../../../redux/userSlice";
import CircleButton from "../../../components/Buttons/CircleButton";
import Modal from "../../../components/Modal/Modal";
import { QUESTIONS, QUESTION_COLORS } from "../../../constants/questions";
import {
  KEEPING_MENT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../../constants/constants";

const LetterList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);
  const { angel, letters, isLoading } = useSelector((state) => state.user);
  const isDisabled = letters.length !== 7;

  const handleCircleClick = (color, index) => {
    if (letters[index]) {
      navigation.navigate("Letter", {
        color,
        question: QUESTIONS[index],
        letter: letters[index],
      });

      return;
    }

    navigation.navigate("LetterInput", { color, question: QUESTIONS[index] });
  };

  const handleConfirmClick = () => {
    dispatch(fetchAngel(angel.id));

    if (!isLoading) {
      navigation.navigate("MyMailBox");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={isDisabled ? styles.disabledButton : styles.button}
          disabled={isDisabled}
          onPressOut={() => setIsClicked(true)}
        >
          <Text style={styles.buttonText}>보관함에 저장</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.extraContainer}>
        <Image source={angelImg} style={styles.image} />
        <Text style={styles.text}>Dear. [ {angel.name}🧡 ]</Text>
        <View style={styles.circleContainer}>
          {QUESTION_COLORS.map((value, index) => {
            if (!letters.length) {
              if (index === 0) {
                return (
                  <CircleButton
                    key={value}
                    color={value}
                    size={90}
                    handleClick={() => handleCircleClick(value, index)}
                  />
                );
              }

              return (
                <CircleButton
                  key={value}
                  color={value}
                  size={90}
                  disabled={true}
                />
              );
            }

            if (index <= letters.length) {
              return (
                <CircleButton
                  key={value}
                  color={value}
                  size={90}
                  handleClick={() => handleCircleClick(value, index)}
                />
              );
            }

            return (
              <CircleButton
                key={value}
                color={value}
                size={90}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
      {isClicked ? (
        <Modal
          title="보관함 저장"
          handleCloseClick={() => setIsClicked(true)}
          handleConfirmClick={handleConfirmClick}
          content={KEEPING_MENT}
        />
      ) : null}
    </View>
  );
};

export default LetterList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  disabledButton: {
    width: WINDOW_WIDTH / 4,
    height: WINDOW_HEIGHT / 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#C7C5A7",
    opacity: 0.3,
  },
  button: {
    width: WINDOW_WIDTH / 4,
    height: WINDOW_HEIGHT / 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#C7C5A7",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
  },
  extraContainer: {
    flex: 9.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: WINDOW_WIDTH / 2,
    height: WINDOW_HEIGHT / 4,
    resizeMode: "contain",
  },
  text: {
    margin: 15,
    fontSize: 18,
    fontWeight: "700",
  },
  circleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
});
