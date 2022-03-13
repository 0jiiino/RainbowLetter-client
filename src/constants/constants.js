import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const WARNING_MESSAGE = {
  EMPTY_EMAIL: "이메일을 입력해주세요",
  EMPTY_PASSWORD: "비밀번호를 입력해주세요",
  SERVER_ERROR: "서버가 불안정합니다.\n잠시 후에 다시 시도해주세요.",
};

const MODAL_TITLE = {
  LOCKER: "보관함 저장",
  NEW_ANGEL: "새로운 천사 생성",
  ERROR: "오류",
  SEND_SUCCESS: "전송 성공",
  SEND_FAIL: "전송 실패",
};

const VERIFICATION_SUCCESS = "인증에 성공하였습니다.";

const KEEPING_MENT =
  "해당 천사를 보관하시겠습니까?\n천사가 가진 7개의 편지들도\n함께 보관함으로 이동합니다.";

const SUCCESS_MESSAGE = "보내주신 답장이\n작성자에게 원활하게 전달되었습니다💌";

const FAILURE_MESSAGE =
  "답장 전송에 실패하였습니다.\n잠시 후 다시 시도해주세요.";

export {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  VERIFICATION_SUCCESS,
  KEEPING_MENT,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE,
  WARNING_MESSAGE,
  MODAL_TITLE,
};
