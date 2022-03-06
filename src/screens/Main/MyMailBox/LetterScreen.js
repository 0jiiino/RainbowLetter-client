import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import { fetchEcho } from "../../../../redux/userSlice";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../../constants/constants";
import CircleButton from "../../../components/Buttons/CircleButton";
import useDidMountEffect from "../../../utils/useDidMountEffect";

const Letter = ({ route }) => {
  let timer;
  const { color, question, letter } = route.params;
  const dispatch = useDispatch();
  const [echo, setEcho] = useState(letter.echo);
  const [finalEcho, setFinalEcho] = useState(letter.echo);

  const requestServer = () => {
    const echoInfo = { echo: finalEcho, id: letter._id };

    dispatch(fetchEcho(echoInfo));
  };

  useEffect(() => {
    timer = setTimeout(() => {
      setFinalEcho(echo);
    }, 500);

    return () => clearTimeout(timer);
  }, [echo]);

  useDidMountEffect(requestServer, finalEcho);

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <CircleButton color={color} size={90} />
        <Text>{question}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.echo}>메아리 여부 📢</Text>
        <Switch
          value={echo}
          onValueChange={(event) => setEcho(event)}
          style={styles.switch}
        />
      </View>
      <View style={styles.letterContainer}>
        <Text style={styles.title}>{letter.title}</Text>
        <ScrollView>
          <Text style={styles.content}>{letter.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Letter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: WINDOW_HEIGHT * 0.05,
  },
  echo: {
    fontWeight: "700",
  },
  switch: {
    width: WINDOW_WIDTH * 0.15,
    marginRight: 10,
  },
  letterContainer: {
    alignItems: "center",
  },
  title: {
    width: WINDOW_WIDTH * 0.9,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#C7C5A7",
    borderBottomWidth: 1.5,
  },
  content: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEIGHT * 0.5,
    padding: 10,
    borderColor: "#C7C5A7",
    borderWidth: 1.5,
    borderRadius: 10,
    textAlignVertical: "top",
  },
});
