import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const LetterContainer = ({ letter, style }) => {
  const { title, content, creator } = letter;

  return (
    <View style={style}>
      <ScrollView>
        <Text style={styles.title}>[ {title} ]</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.from}>From. {creator}</Text>
      </ScrollView>
    </View>
  );
};

export default LetterContainer;

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "900",
  },
  content: {
    fontSize: 15,
  },
  from: {
    paddingTop: 10,
    marginTop: 10,
    fontSize: 15,
    textAlign: "right",
  },
});
