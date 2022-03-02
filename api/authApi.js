import { SERVER_URI } from "@env";

const postCertification = async (phoneNumber) => {
  const response = await fetch(`${SERVER_URI}/users/certification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber }),
  });

  return await response.json();
};

const postVerification = async (phoneNumber, code) => {
  const response = await fetch(`${SERVER_URI}/users/verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber, code }),
  });

  return await response.json();
};

const postSignUp = async (userInfo) => {
  const response = await fetch(`${SERVER_URI}/users/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
};

export { postCertification, postVerification, postSignUp };
