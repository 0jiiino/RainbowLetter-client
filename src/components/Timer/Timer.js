import React from "react";
import { Text } from "react-native";

const Timer = ({ minute, second, style }) => {
  return (
    <Text style={style}>
      {minute}:{second < 10 ? `0${second}` : second}
    </Text>
  );
};

export default Timer;
