import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const SERVER_ERROR = "서버가 불안정합니다.\n잠시 후에 다시 시도해주세요.";
const VERIFICATION_SUCCESS = "인증에 성공하였습니다.";

export { WINDOW_WIDTH, WINDOW_HEIGHT, SERVER_ERROR, VERIFICATION_SUCCESS };
