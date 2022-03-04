import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { WINDOW_WIDTH, WINDOW_HEIGHT } from "../../constants/constants";

const Modal = ({
  title,
  placehodler,
  handleCloseClick,
  handleInputChange,
  handleConfirmClick,
  isInputModal = false,
  content,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.modal}>
        <View style={styles.top}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseClick}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          {isInputModal ? (
            <TextInput
              style={styles.textInput}
              placeholder={placehodler}
              onChangeText={handleInputChange}
            />
          ) : (
            <Text style={styles.text}>{content}</Text>
          )}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleConfirmClick}
          >
            <Text style={styles.save}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "#00000080",
  },
  modal: {
    position: "absolute",
    alignItems: "center",
    width: WINDOW_WIDTH * 0.8,
    height: WINDOW_HEIGHT * 0.3,
    borderRadius: 10,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WINDOW_WIDTH * 0.75,
    borderBottomWidth: 1,
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: WINDOW_WIDTH * 0.6,
    margin: 20,
    borderColor: "gray",
    borderBottomWidth: 1,
  },
  text: {
    width: WINDOW_WIDTH * 0.6,
    margin: 20,
    textAlign: "center",
  },
  saveButton: {
    justifyContent: "center",
    alignItems: "center",
    width: WINDOW_WIDTH * 0.15,
    height: WINDOW_HEIGHT * 0.05,
    margin: 10,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: "#C7C5A7",
  },
  titleText: {
    fontSize: 15,
    margin: 10,
  },
});
