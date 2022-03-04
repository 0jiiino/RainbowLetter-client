import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import angelImg from "../../../../assets/Images/angel.png";
import CircleButton from "../../../components/Buttons/CircleButton";
import QUESTIONS from "../../../constants/questions";
import COLORS from "../../../constants/colors";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";

const LetterList = () => {
  const navigation = useNavigation();
  const { angel, letters } = useSelector((state) => state.user);

  const handelCircleClick = (color, index) => {
    if (letters[index]) {
      navigation.navigate("Letter", {
        color,
        index,
        question: QUESTIONS[index],
        letter: letters[index],
      });

      return;
    }

    navigation.navigate("Letter", { color, index, question: QUESTIONS[index] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>보관함에 저장</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.extraContainer}>
        <Image source={angelImg} style={styles.image} />
        <Text style={styles.text}>Dear. [ {angel.name}🧡 ]</Text>
        <View style={styles.circleContainer}>
          {COLORS.map((value, index) => {
            if (!letters.length) {
              if (index === 0) {
                return (
                  <CircleButton
                    key={value}
                    color={value}
                    size={90}
                    handleClick={() => handelCircleClick(value, index)}
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
                  handleClick={handelCircleClick(value, index)}
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
