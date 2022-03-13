import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchMailboxAngels,
  fetchMailboxLetters,
  mailboxSlice,
} from "../../../../redux/mailboxSlice";
import { deleteAngel } from "../../../../api/angelApi";
import Angel from "../../../components/Angel/Angel";
import Modal from "../../../components/Modal/Modal";
import { WARNING_MESSAGE } from "../../../constants/constants";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [hasError, setHasError] = useState(false);
  const { id } = useSelector((state) => state.user);
  const { angels, isLoading } = useSelector((state) => state.mailbox);

  useEffect(() => {
    if (!angels.length) {
      dispatch(fetchMailboxAngels(id));
    }
  }, [isFocused]);

  const handleAngelClick = (angelId) => {
    dispatch(fetchMailboxLetters(angelId));

    if (!isLoading) {
      navigation.navigate("MailboxLetter", { angelId });
    }
  };

  const handleDeleteClick = async (angelId, userId) => {
    try {
      const response = await deleteAngel(angelId, userId);

      if (!response.error) {
        dispatch(mailboxSlice.actions.delete({ id: angelId }));
      }

      if (response.error) {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    }
  };

  const renderAngel = ({ item }) => {
    return (
      <Angel
        name={item.name}
        handleClick={() => handleAngelClick(item.id)}
        handleDeleteClick={() => handleDeleteClick(item.id, id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {angels.length ? (
        <FlatList numColumns={2} data={angels} renderItem={renderAngel} />
      ) : null}
      {hasError ? (
        <Modal
          title="오류"
          handleCloseClick={() => setHasError(false)}
          handleConfirmClick={() => setHasError(false)}
          content={WARNING_MESSAGE.SERVER_ERROR}
        />
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
