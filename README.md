# BookBook

## 설명

## 설계

1. 메인 화면 구현

- 레이아웃
- 이벤트 동작
  - 책 리스트의 하트 버튼 누르면 배경색 변화
  - 상단의 하트 버튼 누르면 모달창 열림
- API 연동

2. 찜 기능 구현

- localStorage에 isbn값 저장, 삭제
  - 메인 화면의 책 리스트의 하단 버튼 누르면 isbn값 저장, 삭제
- localStorage로부터 isbn값 가져오기
  - 화면이 초기화될 때 localList에 isbn 리스트 저장
- localList에 저장된 목록을 통해 API 연동

  - 메인 화면의 상단 버튼 누르면 localList의 isbn을 query에 넣어 fetch
  - 모달의 책 리스트의 하단 버튼 누르면 isbn 삭제, 동시에 변경된 localList로 fetch

3. 검색 기능 구현

- 검색어 글자수 제한
- 새로고침하면 검색어 입력창 focus
- 검색어 입력하고 엔터키 누르면 해당 검색어(제목 또는 저자)를 query에 넣어 fetch
- 빈 검색어 입력하고 엔터키 누르면 메인 화면 API fetch

4. 페이지네이션 기능 구현

- 전체 책 리스트를 8개로 분할해 하나의 페이지로 할당하여, 전체 페이지 리스트 로딩
- 이전, 이후 버튼 눌러 5개 페이지 이동
  - 전체 페이지 중 시작 페이지(1)라면, 이전 버튼 사라짐
  - 전체 페이지 중 마지막 페이지라면, 이후 버튼 사라짐

5. 반응형 구현

- 메인 화면 헤더 flex 방향 column으로 변경
- 메인 화면 책 리스트 개수 4개 > 2개로 감소
- 모달창 책 리스트 개수 3개 > 2개로 감소

## 와이어프레임

![BookBook_WireFrame](https://github.com/user-attachments/assets/c5a96ed5-12b5-454a-bf83-7fa0b5e8536b)

## 서버 실행

```js
node server.js
```
