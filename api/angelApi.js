import { SERVER_URI } from "@env";
import * as SecureStore from "expo-secure-store";

export const postNewAngel = async (creationInfo) => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const response = await fetch(`${SERVER_URI}/angels`, {
    method: "POST",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creationInfo),
  });

  return await response.json();
};

export const getAngelLetters = async (id) => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const response = await fetch(`${SERVER_URI}/angels/${id}`, {
    method: "GET",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const patchAngel = async (id) => {
  const accessToken = (
    await SecureStore.getItemAsync("accessToken")
  ).replaceAll('"', "");

  const activationInfo = { activation: false };

  const response = await fetch(`${SERVER_URI}/users/angels/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activationInfo),
  });

  return await response;
};