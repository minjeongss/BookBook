//fake fetch: dummy data를 활용
// import { FAKE_API_FILE } from "./FAKE_API_FILE.js";
const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ item: FAKE_API_FILE });
    }, 1000);
  });
};

//fetch
const getData = (start = 1) => {
  // return fakeFetch()
  //   .then((data) => {
  //     return data.item;
  //   })
  //   .catch((error) => {
  //     console.error("API 요청 중 오류 발생:", error);
  //     return undefined;
  //   });
  return fetch(
    `http://localhost:3000/api/list?queryType=ItemNewAll&start=${start}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.item;
    })
    .catch((error) => {
      console.error("API 요청 중 오류 발생:", error);
      return undefined;
    });
};

const getFavoriteData = async (isbn) => {
  return fetch(`http://localhost:3000/api/favorite?itemIsbn=${isbn}`)
    .then((response) => response.json())
    .then((data) => {
      return data.item;
    })
    .catch((error) => {
      console.error("API 요청 중 오류 발생:", error);
      return undefined;
    });
};

const getSearchData = (searchValue, start = 1) => {
  return fetch(
    `http://localhost:3000/api/search?query=${searchValue}&queryType=Keyword&start=${start}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.item;
    })
    .catch((error) => {
      console.error("API 요청 중 오류 발생:", error);
      return undefined;
    });
};
