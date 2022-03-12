import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as SecureStore from "expo-secure-store";

import { postLogin } from "../../../api/authApi";
import { userSlice } from "../../../redux/userSlice";
import {
  SERVER_ERROR,
  WARNING_MESSAGE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../constants/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleLoginClick = async () => {
    if (inputs.email === "") {
      setErrorMessage(WARNING_MESSAGE.EMPTY_EMAIL);

      return;
    }

    if (inputs.password === "") {
      setErrorMessage(WARNING_MESSAGE.EMPTY_PASSWORD);

      return;
    }

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
        <TextInput
          placeholder="이메일"
          value={inputs.email}
          onChangeText={(event) => setInputs({ ...inputs, email: event })}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="비밀번호"
          value={inputs.password}
          onChangeText={(event) => setInputs({ ...inputs, password: event })}
          secureTextEntry={true}
          style={styles.input}
        />
        {errorMessage !== "" ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.loginButton}
          onPressOut={handleLoginClick}
        >
          <Text style={styles.text}>로그인</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    marginTop: 50,
  },
  errorText: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "900",
  },
  input: {
    width: WINDOW_WIDTH * 0.6,
    height: WINDOW_HEIGHT * 0.05,
    marginVertical: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#C7C5A7",
    textAlign: "center",
  },
  loginButton: {
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.22,
    height: WINDOW_HEIGHT * 0.05,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#C7C5A7",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
});
