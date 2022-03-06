import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import {
  postCertification,
  postSignUp,
  postVerification,
} from "../../../api/authApi";
import {
  SERVER_ERROR,
  VERIFICATION_SUCCESS,
  WINDOW_WIDTH,
} from "../../constants/constants";
import signUpValidation from "../../validation/signUpValidation";
import CustomButton from "../../components/Buttons/Button";
import Input from "../../components/TextInput/TextInput";

const SignUp = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    phoneNumber: "",
    certificationCode: "",
  });

  const handleSendClick = async () => {
    try {
      const response = await postCertification(inputs.phoneNumber);

      if (response.status === 400) {
        setErrorMessage(response.result);
      }

      if (response.status === 201) {
        setErrorMessage("");
      }
    } catch {
      setErrorMessage(SERVER_ERROR);
    }
  };

  const handleConfirmClick = async () => {
    const { phoneNumber, certificationCode } = inputs;

    try {
      const response = await postVerification(phoneNumber, certificationCode);

      if (response.status === 201) {
        setSuccessMessage(VERIFICATION_SUCCESS);
      }

      if (response.status === 400) {
        setSuccessMessage(response.result);
      }
    } catch {
      setErrorMessage(SERVER_ERROR);
    }
  };

  const handleSignUpClick = async () => {
    const { email, password, nickname, phoneNumber } = inputs;
    const userInfo = { email, password, nickname, phoneNumber };

    const message = signUpValidation(email, password, phoneNumber);

    if (message) {
      setErrorMessage(message);
      return;
    }

    try {
      const response = await postSignUp(userInfo);

      if (response.status === 201) {
        navigation.navigate("Success");
      }

      if (response.status === 400) {
        setErrorMessage(response.result);
      }
    } catch {
      setErrorMessage(SERVER_ERROR);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {successMessage !== "" ? (
          <Text style={styles.text}>{successMessage}</Text>
        ) : null}
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
        <Input
          placeholder="닉네임"
          value={inputs.nickname}
          handleInputChange={(event) =>
            setInputs({ ...inputs, nickname: event })
          }
        />
        <View style={styles.rowContainer}>
          <Input
            placeholder="휴대폰 번호"
            value={inputs.phoneNumber}
            handleInputChange={(event) =>
              setInputs({ ...inputs, phoneNumber: event })
            }
            keyboardType="number-pad"
          />
          <CustomButton
            text="인증번호 전송"
            handleClick={handleSendClick}
            style={styles.button}
          />
        </View>
        <View style={styles.rowContainer}>
          <Input
            placeholder="인증번호"
            value={inputs.certificationCode}
            handleInputChange={(event) =>
              setInputs({ ...inputs, certificationCode: event })
            }
            keyboardType="number-pad"
          />
          <CustomButton
            text="확인"
            handleClick={handleConfirmClick}
            style={styles.button}
          />
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <Button
          title="회원가입"
          onPress={handleSignUpClick}
          disabled={successMessage === ""}
          color="#C7C5A7"
          style={styles.signUpButton}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  inputContainer: {
    marginTop: 100,
  },
  rowContainer: {
    flexDirection: "row",
  },
  button: {
    width: WINDOW_WIDTH * 0.22,
    height: 30,
    padding: 4,
    marginLeft: 10,
    backgroundColor: "#C7C5A7",
    fontSize: 10,
  },
  signUpButton: {
    width: WINDOW_WIDTH * 0.22,
    height: 30,
    padding: 4,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 10,
  },
  signUpContainer: {
    alignItems: "center",
  },
  text: {
    marginLeft: 30,
    marginBottom: 20,
    color: "red",
    fontSize: 15,
    fontWeight: "900",
  },
});
