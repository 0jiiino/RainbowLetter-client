import { SERVER_URI } from "@env";
import * as SecureStore from "expo-secure-store";

export const patchEcho = async (echoInfo) => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const { echo, id } = echoInfo;

  const response = await fetch(`${SERVER_URI}/letters/${id}/echos`, {
    method: "PATCH",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ echo }),
  });

  return await response.json();
};

export const getEchoLetters = async () => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const response = await fetch(`${SERVER_URI}/letters`, {
    method: "GET",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const putReply = async (id, content) => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const response = await fetch(`${SERVER_URI}/letters/${id}/replies`, {
    method: "PUT",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  return await response.json();
};
