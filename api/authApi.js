import { SERVER_END_POINT } from "@env";

const postCertification = async (phoneNumber) => {
  const response = await fetch(`${SERVER_END_POINT}/users/certification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber }),
  });

  return await response.json();
};

const postVerification = async (phoneNumber, code) => {
  const response = await fetch(`${SERVER_END_POINT}/users/verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber, code }),
  });

  return await response.json();
};

const postSignUp = async (userInfo) => {
  const response = await fetch(`${SERVER_END_POINT}/users/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
};

const postLogin = async (loginInfo) => {
  const response = await fetch(`${SERVER_END_POINT}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });

  return await response.json();
};

export { postCertification, postVerification, postSignUp, postLogin };
