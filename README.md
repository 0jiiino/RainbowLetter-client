# 💌 무지개 편지 (Rainbow Letter)
> 이제 더 이상 이 세상에 없는 소중한 누군가를 떠올리면서 주어진 **7가지 질문**에 편지로 답해보세요.
다른 사용자들의 위로 섞인 진심이 감정을 정리하는데 도움을 줄 거예요.

## 🔴 기획 의도가 무엇인가요?
제가 이번에 진행한 프로젝트는 **무지개 편지**라고 하는 안드로이드 편지 어플입니다. 무지개 편지는 누군가를 잃은 아픔을 가진 사람들을 타게팅한 어플입니다. 누군가를 떠나보낸 후의 감정은, 생각보다 많이 무거워서 다른 사람이 쉽게 공감할 수도, 다른 사람과 쉽게 나눌 수도 없는 감정이라고 생각합니다. 그런 의미에서 **같은 아픔을 가진 사람들끼리 서로 위로하고, 보듬어 주면 어떨까** 하는 생각에서 해당 어플을 기획하였습니다.


## 🟠 사용 기술은 무엇인가요?
### 1. 프론트엔드
+ React Native
+ Redux
+ Redux Toolkit
+ Redux Thunk
+ Expo CLI

### 2. 백엔드
+ Node.js
+ Express
+ MongoDB
+ Naver SMS API
+ Elastic Beanstalk

### 3. 공통
+ ESLint
+ Prettier


## 🟡 무지개 편지의 주된 기능이 무엇인가요?
크게 세 가지의 기능이 존재합니다.

1. 그리움 편지
    + 사용자는 보고 싶은 사람을 하나의 **천사**로 생성할 수 있습니다. 하나의 천사에 총 **7가지 편지**를 작성해야합니다. 7가지 편지는 그냥 작성하는 것이 아니라 **지정된 질문**에 편지로 답하는 형식으로 작성합니다.
    + 각각의 편지에는, **메아리** 기능이 있습니다. 내 편지를 다른 사용자에게 공개하고 답장을 받길 원하면 메아리를 켤 수 있고, 다른 사용자에게 공개하는걸 원치 않고 나만 보고 싶다면 메아리를 끌 수 있습니다.
    + 그 사람을 떠나보내줘도 괜찮을 것 같을 때, 천사를 **보관함**으로 이동할 수 있습니다. 하나의 천사에 지정된 7개의 편지를 다 작성하지 못하면 보관함으로 이동할 수 없으며, 각 편지의 메아리 기능은 전부 꺼진 채로 보관함으로 이동됩니다. 즉, 보관함에 보관된 천사의 편지들은 더 이상 다른 사용자에게 공개되지 않습니다.
    + 각 편지는 따로 **수정 / 삭제가 불가**합니다. **소중한 누군가를 생각하며 신중하게 적었으면 하는 개발자의 마음을 반영**했습니다.

2. 모두의 편지함
    + **모두의 편지함**에서 다른 사용자들이 공개한 편지를 읽어볼 수도, 답장을 보낼 수도 있습니다.
    + 내가 누군가의 편지에 **답장**을 보냈다면, 그 답장은 편지를 작성한 사용자의 휴대폰 **문자**로 전송됩니다.

3. 나의 편지함
    + 보관함으로 이동된 천사를 한 번에 볼 수 있습니다.
    + **천사 단위로 삭제**가 가능합니다.


## 🟢 실제로 사용해보고 싶은데... 실행 방법이 따로 있을까요?
클라이언트 파일을 클론 받으셔서 아래와 같이 환경 변수를 설정해주시면 됩니다.
```
SERVER_URI=http://rainbowletter.ap-northeast-2.elasticbeanstalk.com/
```

## 🔵 어플을 사용할 수 없는 분들을 위한 맛보기는 없을까요?
당연히 있습니다!!

| 그리움 편지 | 모두의 편지함 | 나의 편지함 |
|------|---|---|
|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657255.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657347.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657606.png" width="250" height="450">|
|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657328.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657369.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657618.png" width="250" height="450">|
|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657334.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657376.png" width="250" height="450">||
|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657336.png" width="250" height="450">|<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657380.png" width="250" height="450">||
||<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657432.png" width="250" height="450">||
||<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657588.png" width="250" height="450">||
||<img src="https://travelphotolog.s3.ap-northeast-2.amazonaws.com/rainbowLetter/Screenshot_1648657438.png" width="250" height="450">||

## 🟣 하나부터 열까지 혼자서 마친 프로젝트. 소감이 궁금해요!
> 하나부터 열까지 전부 제 손을 거쳐야지 완성이 되는 프로젝트는 처음이라서 걱정이 많았습니다. 이전 팀 프로젝트는 멘토와 커뮤니케이션을 하며 조언을 얻을 수 있었지만, 개인 프로젝트는 오롯이 제 몫이라서 부담감도 컸습니다. 잘 해내야 한다는 부담이 컸던 만큼, 과정에서 얻는 것들이 많았습니다.
스스로 부족한 부분이 무엇인지 생각해보고 채워넣을 수 있는 시간이었고, 내 손에서 무엇인가를 만들어낸다는 재미를 느꼈던 시간이었습니다. 더불어 사용자 경험 측면에서 많이 생각해본 시간이었습니다. ‘내가 만든 앱을 어떻게 해야 사용자가 불편함 없이 사용할 수 있을까?’ 라는 질문에 대해서 많이 생각해보고, 최대한 불편함 없는 앱을 만들고자 노력했습니다.
물론 아쉬움도 많이 남는 프로젝트입니다. 그러나 첫 개인 프로젝트였던 만큼, 끝이 아니라 시작의 발판으로 삼고 앞으로 성장하는 개발자가 되기 위한 좋은 경험이었던 것 같습니다.

