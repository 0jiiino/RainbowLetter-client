const signUpValidation = (email, password, phoneNumber) => {
  if (!email || !password || !phoneNumber) {
    return "누락된 정보가 있습니다.";
  }

  if (!email.match(/\w+@\w+.\w+/g)) {
    return "이메일 양식이 잘못되었습니다.";
  }

  if (password.length < 8) {
    return "비밀번호는 8글자 이상입니다.";
  }

  if (phoneNumber.length !== 11) {
    return "휴대폰 번호는 '-'를 뺀, 11자리 숫자를 입력해주세요.";
  }
};

export default signUpValidation;
