import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { fetchNewAngel } from "../../../../redux/userSlice";
import { MODAL_TITLE } from "../../../constants/constants";
import Modal from "../../../components/Modal/Modal";

const NewAngel = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const { id, isLoading } = useSelector((state) => state.user);

  const handleSaveClick = () => {
    dispatch(fetchNewAngel({ id, name }));

    if (!isLoading) {
      setIsClicked(false);
      navigation.navigate("Angel");
    }
  };

  return (
    <View style={styles.container}>
      <AntDesign.Button
        name="pluscircleo"
        size={50}
        backgroundColor="#FFFDDD"
        color="black"
        onPressOut={() => setIsClicked(true)}
      />
      <Text style={styles.text}>
        새로운 천사를 생성하고 싶으시면 눌러주세요 💌
      </Text>
      {isClicked ? (
        <Modal
          title={MODAL_TITLE.NEW_ANGEL}
          placehodler="천사의 이름을 입력하세요"
          handleCloseClick={() => setIsClicked(false)}
          handleInputChange={(event) => setName(event)}
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
