import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const LetterList = () => {
  const { angel } = useSelector((state) => state.user);

  return (
    <View>
      <Text>뭘봐</Text>
    </View>
  );
};

export default LetterList;
