import React from "react";
import { Text, View } from "react-native";

const Letter = ({ route }) => {
  console.log(route.params);

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default Letter;
