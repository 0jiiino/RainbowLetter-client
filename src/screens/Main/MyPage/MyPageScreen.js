import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchMailboxAngels,
  mailboxSlice,
} from "../../../../redux/mailboxSlice";
import { deleteAngel } from "../../../../api/angelApi";
import Angel from "../../../components/Angel/Angel";

const MyPage = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { id } = useSelector((state) => state.user);
  const { angels } = useSelector((state) => state.mailbox);

  useEffect(() => {
    if (!angels.length) {
      dispatch(fetchMailboxAngels(id));
    }
  }, [isFocused]);

  const handleDeleteClick = async (angelId, userId) => {
    try {
      const response = await deleteAngel(angelId, userId);

      if (!response.error) {
        dispatch(mailboxSlice.actions.delete({ id: angelId }));
      }
    } catch {
      // 모달
      // console.log(error);
    }
  };

  const renderAngel = ({ item }) => {
    return (
      <Angel
        name={item.name}
        handleClick={() => console.log(item.id)}
        handleDeleteClick={() => handleDeleteClick(item.id, id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {angels.length ? (
        <FlatList numColumns={2} data={angels} renderItem={renderAngel} />
      ) : null}
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDDD",
    alignItems: "center",
  },
});
