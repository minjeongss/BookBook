# BookBook

## 설계

1. 메인 화면 구현

- 레이아웃
- 이벤트 동작
  - 책 리스트의 하트 버튼 누르면 배경색 변화
  - 상단의 하트 버튼 누르면 모달창 열림
- API 연동

2. 찜 기능 구현

- localStorage에 isbn값 저장
  - 메인 화면의 책 리스트의 하단 버튼 누르면 isbn값 저장
- localStorage로부터 isbn값 가져오기
  - 화면이 초기화될 때 localList에 isbn 리스트 저장

## 서버 실행

```js
node scripts/server.js
```
