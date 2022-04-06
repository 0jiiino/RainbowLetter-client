# 💌 무지개 편지 (Rainbow Letter)
> 이제 더 이상 이 세상에 없는 소중한 누군가를 떠올리면서 주어진 **7가지 질문**에 편지로 답해보세요.
다른 사용자들의 위로 섞인 진심이 감정을 정리하는데 도움을 줄 거예요.

<br/>

## 🔴 기획 의도가 무엇인가요?
제가 이번에 진행한 프로젝트는 **무지개 편지**라고 하는 안드로이드 편지 어플입니다. 무지개 편지는 누군가를 잃은 아픔을 가진 사람들을 타게팅한 어플입니다. 누군가를 떠나보낸 후의 감정은, 생각보다 많이 무거워서 다른 사람이 쉽게 공감할 수도, 다른 사람과 쉽게 나눌 수도 없는 감정이라고 생각합니다. 그런 의미에서 **같은 아픔을 가진 사람들끼리 서로 위로하고, 보듬어 주면 어떨까** 하는 생각에서 해당 어플을 기획하였습니다.

<br/>

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

<br/>

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

<br/>

## 🟢 실제로 사용해보고 싶은데... 실행 방법이 따로 있을까요?
클라이언트 파일을 클론 받으셔서 아래와 같이 환경 변수를 설정해주시면 됩니다.
```
SERVER_URI=http://rainbowletter.ap-northeast-2.elasticbeanstalk.com/
```
<br/>

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

<br/>

## 🟣 구현하면서 많이 고민하거나 아쉬운 점이 있나요?
### 1. ‘모두의 편지함’ 기능 구현시, 서버에 데이터 요청
많은 사람이 사용할 수 있는 앱을 만들기 위해서는 사용자가 사용하기 편해야 한다고 생각했기 때문에 사용자 경험에 대해 깊게 생각해보았습니다.

해당 프로젝트의 ‘모두의 편지함’은 DB에 메아리 기능이 켜져 있는 모든 편지를 받아와서 보여줘야 합니다. 처음에는 모두의 편지함 tab의 첫 screen이 보일 때마다 서버에 데이터를 요청하여 매번 새롭게 갱신해주었습니다. 사용자들에게 매번 갱신된 데이터를 보여줄 수 있다는 점에서 장점이라고 생각하였으나, 문제점도 존재하였습니다.

첫째로, 매번 서버에 데이터를 요청한다면 메아리 갱신이 없는 경우에도 불필요한 요청을 하게 됩니다. 잦은 데이터 요청은 서버 과부하의 원인이 될 수 있습니다.
둘째로, 사용자가 다른 탭에 갔다가 다시 돌아오는 경우에는 스크롤의 위치가 보존되지 않고 다시 처음으로 돌아가게 됩니다. 이는 사용자 경험 측면에서 좋지 않다고 판단하였습니다.

따라서 처음에 메아리가 켜져 있는 편지들의 데이터를 Redux를 통해 전역 상태로 관리한 후, 따로 사용자가 데이터 새로 고침을 요청하지 않는 이상 Redux에 저장된 데이터를 렌더링해 주는 방식으로 해당 기능을 구현하였습니다.

위와 같은 방식을 사용함으로써 매번 데이터를 요청할 때의 문제점을 해결할 수 있었습니다.


### 2. useEffect의 cleanUp 함수 작성
사용자의 휴대폰 번호가 필요한 앱이기 때문에 회원가입 시, 인증번호 확인 과정을 거치게 하였습니다. 문자로 도착한 인증번호의 유효 시간을 3분으로 정해두고, 인증번호 전송 버튼을 누르면 useEffect를 사용하여 3분 타이머가 보이게끔 하였습니다.

useEffect의 cleanUp 함수 안에 clearInterval 함수를 작성했는데 clearInterval 함수가 제대로 동작하지 않아서, 두 번째 회원가입을 할 때부터 타이머가 제대로 동작하지 않았습니다.

React Native는 React와 다르게 Screen이 stack 형식으로 쌓이다 보니 focus의 문제인가 싶어 useIsFocused, useFocusEffect 등을 사용하여 문제를 해결하려고 하였습니다. 그러나 코드를 수정해도 동일한 문제가 발생하였습니다.

어떤 방법이 있을지 검색하고 고민하던 와중에 useRef 훅을 사용하는 방법이 있다는 것을 알게 되었습니다. useRef의 current 속성을 활용하니 리렌더링도 발생하지 않고 원하는 대로 타이머를 제어할 수 있게 되었습니다.

React를 사용하면서 cleanUp 함수의 중요성에 대해 많이 배웠다고 생각했습니다. 그러나 실제로 cleanUp 함수가 제대로 작동하지 않아서 sideEffect가 발생하는 것을 보니 cleanUp 함수의 중요성을 다시 한번 몸소 확인하고 느낄 수 있었습니다.


### 3. React Native Navigation
React에 Router가 있는 것처럼 React Native에는 Navigation이 있습니다.
저는 Stack Navigation과 Tab Navigation의 UI를 동시에 사용하고 싶어서 Tab Navigation안에  Stack Navigation이 중첩된 Nested Navigation의 형태로 사용하였습니다.

앱에서의 Navigation을 처음 적용해보는지라 어려움이 많았습니다.
저는 편지라는 소스 자체가 지극히 개인적인 부분이라고 생각해서 로그인하지 않으면 앱을 이용할 수 없게 기획하였습니다. 따라서 초반 로그인 / 회원가입 기능을 담당하는 Stack Navigation(이하 first Navigation)과 메인 기능을 담당하는 Nested Navigation(이하 Main Navigation)을 분리하여 기획하였습니다.

이 부분은 ‘탈퇴 / 로그아웃’ 기능을 구현하기 시작하면서 어지러워지기 시작했습니다. 저는 탈퇴 버튼을 누르면 일련의 과정을 거쳐 다시 first Navigation의 첫 스크린을 보여주고 싶었습니다. 그러나 이동을 원하는 스크린이 있는 Navigation을 스택에 쌓는다고 제가 원하는 결과물이 나오지 않았습니다. 이외에도 여러 가지 방법을 시도해보았지만 결국 구현하지 못하고 ‘탈퇴 / 로그아웃’ 기능을 spec out 하였습니다.

제 부족함으로 원하는 기능을 구현하지 못했다는 게 너무 아쉬워서 React Native에 관해 더 깊게 공부하게 된다면 해결하고 싶은 문제입니다.

<br/>

## ⚫️ 하나부터 열까지 혼자서 마친 프로젝트. 소감이 궁금해요!
무지개 편지는 제가 처음으로 리액트 네이티브를 사용하여 만든 프로젝트입니다.
사실 무지개 편지를 기획할 당시만 해도 스스로 이제 막 리액트에 익숙해졌다고 생각했기 때문에 새로운 언어를 시도한다는 것이 어쩌면 조금 부담으로 다가왔습니다. 그러나 저는 남녀노소 누구나, 상황에 구애받지 않고 위로받고 싶은 순간에 이 서비스를 사용하게끔 하고 싶었습니다. 따라서 제 의도에 맞는 프로젝트를 만들기 위해서는 부족하더라도 웹 서비스가 아닌 앱 서비스로 만드는 것이 적합하다고 생각하여 망설임 없이 리액트 네이티브를 프레임워크로 정하게 되었습니다.

하나부터 열까지 전부 제 손을 거쳐야지 완성이 되는 프로젝트는 처음이라서 걱정이 많았습니다. 이전 팀 프로젝트는 멘토와 커뮤니케이션을 하며 조언을 얻을 수 있었지만, 개인 프로젝트는 오롯이 제 몫이라서 부담감도 컸습니다. 잘 해내야 한다는 부담이 컸던 만큼, 과정에서 얻는 것들이 많았습니다.
스스로 부족한 부분이 무엇인지 생각해보고 채워넣을 수 있는 시간이었고, 내 손에서 무엇인가를 만들어낸다는 재미를 느꼈던 시간이었습니다. 더불어 사용자 경험 측면에서 많이 생각해본 시간이었습니다. ‘내가 만든 앱을 어떻게 해야 사용자가 불편함 없이 사용할 수 있을까?’ 라는 질문에 대해서 많이 생각해보고, 최대한 불편함 없는 앱을 만들고자 노력했습니다.
물론 아쉬움도 많이 남는 프로젝트입니다. 그러나 첫 개인 프로젝트였던 만큼, 끝이 아니라 시작의 발판으로 삼고 앞으로 성장하는 개발자가 되기 위한 좋은 경험이었던 것 같습니다.

