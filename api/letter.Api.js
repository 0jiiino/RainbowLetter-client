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
