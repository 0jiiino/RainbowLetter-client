import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { fetchNewAngel } from "../../../../redux/userSlice";
import Modal from "../../../components/Modal/Modal";

const NewAngel = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { id, isLoading } = useSelector((state) => state.user);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");

  const handlePlusClick = () => {
    setIsClicked(true);
  };

  const handleInputChange = (event) => {
    setName(event);
  };

  const handleSaveClick = () => {
    dispatch(fetchNewAngel({ id, name }));

    if (!isLoading) {
      setIsClicked(false);
      navigation.navigate("Angel");
    }
  };

  const handleCloseClick = () => {
    setIsClicked(false);
  };

  return (
    <View style={styles.container}>
      <AntDesign.Button
        name="pluscircleo"
        size={50}
        backgroundColor="#FFFDDD"
        color="black"
        onPressOut={handlePlusClick}
      />
      <Text style={styles.text}>
        새로운 천사를 생성하고 싶으시면 눌러주세요 💌
      </Text>
      {isClicked ? (
        <Modal
          title="새로운 천사 생성"
          placehodler="천사의 이름을 입력하세요"
          handleCloseClick={handleCloseClick}
          handleInputChange={handleInputChange}
          handleConfirmClick={handleSaveClick}
          isInputModal={true}
        />
      ) : null}
    </View>
  );
};

export default NewAngel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDDD",
  },
  text: {
    marginTop: 30,
  },
});
