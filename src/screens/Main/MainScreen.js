import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import login from "../../../assets/Images/login.png";
import signUp from "../../../assets/Images/signUp.png";
import rainbow from "../../../assets/Images/rainbow.png";
import AuthButton from "../../components/Buttons/AuthButton";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants";

const Main = ({ navigation }) => {
  const handleLoginClick = () => {
    // navigation.navigate(Login);
  };

  const handleSignUpClick = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image source={rainbow} style={styles.rainbow} />
      <Text style={styles.title}>무지개 편지</Text>
      <View style={styles.buttonContainer}>
        <AuthButton source={login} handleClick={handleLoginClick} />
        <AuthButton source={signUp} handleClick={handleSignUpClick} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#FFFDDD",
  },
  rainbow: {
    flex: 6,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 2,
    marginTop: 50,
    resizeMode: "contain",
  },
  title: {
    flex: 1,
    margin: 30,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
  },
});
