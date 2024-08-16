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
const getData = () => {
  // return fakeFetch()
  //   .then((data) => {
  //     return data.item;
  //   })
  //   .catch((error) => {
  //     console.error("API 요청 중 오류 발생:", error);
  //     return undefined;
  //   });
  return fetch("http://localhost:3000/api/search?query=aladdin")
    .then((response) => response.json())
    .then((data) => {
      return data.item;
    })
    .catch((error) => {
      console.error("API 요청 중 오류 발생:", error);
      return undefined;
    });
};

// const getFavoriteData = () => {
//   return fetch("http://localhost:3000/api/favorite?itemIsbn=9791187824824")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("API 요청 중 오류 발생:", error);
//       return undefined;
//     });
// };
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

//fetch한 데이터 활용
const loadBooks = async () => {
  const data = await getData();
  if (data === undefined) {
    console.log("FAIL LOAD");
  } else {
    console.log("SUCCESS LOAD");
    loadBooksTemplate(data);
  }
};
const loadFavoriteBooks = async (isbn) => {
  const data = await getFavoriteData(isbn);
  return data;
};

const makeBook = (
  isbn,
  cover,
  title,
  price,
  author,
  publisher,
  description
) => {
  const li = document.createElement("li");
  li.classList.add("book");
  li.innerHTML = `
    <p class="isbn" hidden>${isbn}</p>
    <div>
      <img class="cover" src="${cover}" alt="book image"/>
      <p hidden>${description}</p>
    </div>
    <div>
        <p>${title}</p>
        <p>${price}원</p>
        <p>${author}/${publisher}</p>
    </div>
    <svg class="heartBtn" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.548 3.0053C17.1224 2.57947 16.617 2.24167 16.0608 2.0112C15.5046 1.78074 14.9084 1.66211 14.3063 1.66211C13.7043 1.66211 13.1081 1.78074 12.5519 2.0112C11.9957 2.24167 11.4903 2.57947 11.0647 3.0053L10.1813 3.88863L9.298 3.0053C8.43826 2.14556 7.27219 1.66256 6.05633 1.66256C4.84047 1.66256 3.67441 2.14556 2.81467 3.0053C1.95492 3.86504 1.47192 5.03111 1.47192 6.24697C1.47192 7.46283 1.95492 8.62889 2.81467 9.48863L10.1813 16.8553L17.548 9.48863C17.9738 9.063 18.3116 8.55765 18.5421 8.00143C18.7726 7.44521 18.8912 6.84904 18.8912 6.24697C18.8912 5.64489 18.7726 5.04872 18.5421 4.49251C18.3116 3.93629 17.9738 3.43093 17.548 3.0053Z" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"/>
    </svg>
  `;
  return li;
};
const loadBooksTemplate = (data) => {
  data.map((elem) => {
    $books.appendChild(
      makeBook(
        elem["isbn13"],
        elem["cover"],
        elem["title"],
        elem["priceStandard"],
        elem["author"],
        elem["publisher"],
        elem["description"]
      )
    );
  });
};
loadBooks();
