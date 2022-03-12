import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";

import { postLogin } from "../../../api/authApi";
import { userSlice } from "../../../redux/userSlice";
import { SERVER_ERROR, WINDOW_WIDTH } from "../../constants/constants";
import Input from "../../components/TextInput/TextInput";

const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleLoginClick = async () => {
    try {
      const response = await postLogin(inputs);

      if (response.status === 400) {
        setErrorMessage(response.result);
        return;
      }

      await SecureStore.setItemAsync(
        "accessToken",
        JSON.stringify(response.accessToken)
      );

      dispatch(userSlice.actions.login(response));
      setErrorMessage("");
    } catch {
      setErrorMessage(SERVER_ERROR);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {errorMessage !== "" ? (
          <Text style={styles.text}>{errorMessage}</Text>
        ) : null}
        <Input
          placeholder="이메일"
          value={inputs.email}
          handleInputChange={(event) => setInputs({ ...inputs, email: event })}
          keyboardType="email-address"
        />
        <Input
          placeholder="비밀번호"
          value={inputs.password}
          handleInputChange={(event) =>
            setInputs({ ...inputs, password: event })
          }
          secureTextEntry={true}
        />
      </View>
      <View style={styles.loginContainer}>
        <Button
          title="로그인"
          onPress={handleLoginClick}
          color="#C7C5A7"
          style={styles.loginButton}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  inputContainer: {
    marginTop: 100,
  },
  text: {
    marginLeft: 30,
    marginBottom: 20,
    color: "red",
    fontSize: 15,
    fontWeight: "900",
  },
  loginContainer: {
    alignItems: "center",
  },
  loginButton: {
    width: WINDOW_WIDTH * 0.22,
    height: 30,
    padding: 4,
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    fontSize: 10,
  },
});
