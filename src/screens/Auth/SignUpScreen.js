import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

import {
  postCertification,
  postSignUp,
  postVerification,
} from "../../../api/authApi";
import {
  MESSAGE,
  WARNING_MESSAGE,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../../constants/constants";
import signUpValidation from "../../validation/signUpValidation";
import Button from "../../components/Buttons/Button";
import Timer from "../../components/Timer/Timer";

const SignUp = ({ navigation }) => {
  const mounted = useRef(false);
  const [minute, setMinute] = useState(3);
  const [second, setSecond] = useState(0);
  const [isSend, setIsSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    phoneNumber: "",
    certificationCode: "",
  });
  let countdown;

  useEffect(() => {
    mounted.current = true;

    if (isSend && mounted.current) {
      countdown = setInterval(() => {
        if (second > 0) {
          setSecond(second - 1);
        }

        if (second === 0) {
          if (minute === 0) {
            clearInterval(countdown);
          } else {
            setMinute(minute - 1);
            setSecond(59);
          }
        }
      }, 1000);
    }

    return () => {
      mounted.current = false;
      clearInterval(countdown);
    };
  }, [isSend, minute, second]);

  const handleSendClick = async () => {
    try {
      const response = await postCertification(inputs.phoneNumber);

      if (response.status === 400) {
        setErrorMessage(response.result);
        return;
      }

      if (response.status === 201) {
        setErrorMessage("");
      }
    } catch {
      setErrorMessage(WARNING_MESSAGE.SERVER_ERROR);
    }

    setIsSend(true);
  };

  const handleConfirmClick = async () => {
    const { phoneNumber, certificationCode } = inputs;

    try {
      const response = await postVerification(phoneNumber, certificationCode);

      if (response.status === 201) {
        setSuccessMessage(MESSAGE.VERIFICATION_SUCCESS);
        clearInterval(countdown);
      }

      if (response.status === 400) {
        setSuccessMessage(response.result);
      }
    } catch {
      setErrorMessage(WARNING_MESSAGE.SERVER_ERROR);
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
      setErrorMessage(WARNING_MESSAGE.SERVER_ERROR);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          {successMessage !== "" ? (
            <Text style={styles.text}>{successMessage}</Text>
          ) : null}
          {errorMessage !== "" ? (
            <Text style={styles.text}>{errorMessage}</Text>
          ) : null}
          <TextInput
            placeholder="?????????"
            value={inputs.email}
            onChangeText={(event) => setInputs({ ...inputs, email: event })}
            keyboardType="email-address"
            style={styles.input}
          />
          <TextInput
            placeholder="????????????"
            value={inputs.password}
            onChangeText={(event) => setInputs({ ...inputs, password: event })}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            placeholder="?????????"
            value={inputs.nickname}
            onChangeText={(event) => setInputs({ ...inputs, nickname: event })}
            style={styles.input}
          />
          <TextInput
            placeholder="????????? ??????"
            value={inputs.phoneNumber}
            onChangeText={(event) =>
              setInputs({ ...inputs, phoneNumber: event })
            }
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            text="???????????? ??????"
            handleClick={handleSendClick}
            style={styles.button}
          />
          {isSend ? (
            <Timer minute={minute} second={second} style={styles.text} />
          ) : null}
          <TextInput
            placeholder="????????????"
            value={inputs.certificationCode}
            onChangeText={(event) =>
              setInputs({ ...inputs, certificationCode: event })
            }
            keyboardType="number-pad"
            style={styles.input}
          />
          <Button
            text="??????"
            handleClick={handleConfirmClick}
            style={styles.button}
          />
          <Button
            text="????????????"
            handleClick={handleSignUpClick}
            disabled={successMessage === ""}
            style={styles.signUpButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.22,
    height: WINDOW_HEIGHT * 0.05,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#C7C5A7",
    fontSize: 10,
  },
  signUpButton: {
    justifyContent: "center",
    width: WINDOW_WIDTH * 0.22,
    height: WINDOW_HEIGHT * 0.05,
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#C7C5A7",
    fontSize: 10,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
  },
});
