import React from "react";
import { Text } from "react-native";

const Timer = ({ minute, second }) => {
  return (
    <Text>
      {minute}:{second < 10 ? `0${second}` : second}
    </Text>
  );
};

export default Timer;
