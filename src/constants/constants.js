import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SERVER_ERROR = "서버가 불안정합니다.\n잠시 후에 다시 시도해주세요.";
const VERIFICATION_SUCCESS = "인증에 성공하였습니다.";

const KEEPING_MENT =
  "해당 천사를 보관하시겠습니까?\n천사가 가진 7개의 편지들도\n함께 보관함으로 이동합니다.";

export {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  SERVER_ERROR,
  VERIFICATION_SUCCESS,
  KEEPING_MENT,
};
