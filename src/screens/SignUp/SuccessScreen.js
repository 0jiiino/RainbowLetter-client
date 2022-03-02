import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import rainbow from "../../../assets/Images/rainbow.png";
import login from "../../../assets/Images/login.png";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../constants";
import AuthButton from "../../components/Buttons/AuthButton";

const Success = ({ navigation }) => {
  const handleLoginClick = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={rainbow} style={styles.rainbow} />
      <Text style={styles.text}>⭐️ 회원가입이 완료되었습니다 ⭐️</Text>
      <AuthButton source={login} handleClick={handleLoginClick} />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
    alignItems: "center",
    alignContent: "center",
  },
  rainbow: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 3,
    marginTop: 50,
    resizeMode: "contain",
  },
  text: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: "700",
  },
  login: {
    width: WINDOW_WIDTH / 3,
    height: WINDOW_HEIGHT / 6,
    marginTop: 50,
    resizeMode: "contain",
  },
});
