import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchEchoLetters } from "../../../../redux/echoLetterSlice";
import Card from "../../../components/Card/Card";

const OurMailBox = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(true);
  const { letters, isLoading } = useSelector((state) => state.echoLetter);

  useEffect(() => {
    if (!letters.length) {
      dispatch(fetchEchoLetters());
    }

    setIsRefreshing(false);
  }, []);

  const renderCard = ({ item }) => {
    const onPress = () => {
      navigation.navigate("LetterDetail", { letter: item });
    };

    return <Card letter={item} onPress={onPress} />;
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="#C7C5A7" />
      ) : (
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.text}>누군가의 편지에 답장해볼까요?</Text>
            </View>
          }
          data={letters}
          renderItem={renderCard}
          keyExtractor={(letter) => letter._id}
          refreshing={isRefreshing}
          onRefresh={() => dispatch(fetchEchoLetters())}
        />
      )}
    </View>
  );
};

export default OurMailBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFDDD",
  },
  headerContainer: {
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});
