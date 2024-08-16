const $heartModalBtn = document.querySelector(".heartModalBtn");
const $modal = document.querySelector(".modal");
const $modalBackground = document.querySelector(".modalBackground");
const $modalClose = document.querySelector(".modalClose");
const $favoriteBooks = document.querySelector(".favoriteBooks");

const makeFavoriteBook = (
  isbn,
  cover,
  title,
  price,
  author,
  publisher,
  description
) => {
  console.log(isbn, title, price);
  const li = document.createElement("li");
  li.classList.add("favoriteBook");
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
    <svg class="heartBtn on" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.548 3.0053C17.1224 2.57947 16.617 2.24167 16.0608 2.0112C15.5046 1.78074 14.9084 1.66211 14.3063 1.66211C13.7043 1.66211 13.1081 1.78074 12.5519 2.0112C11.9957 2.24167 11.4903 2.57947 11.0647 3.0053L10.1813 3.88863L9.298 3.0053C8.43826 2.14556 7.27219 1.66256 6.05633 1.66256C4.84047 1.66256 3.67441 2.14556 2.81467 3.0053C1.95492 3.86504 1.47192 5.03111 1.47192 6.24697C1.47192 7.46283 1.95492 8.62889 2.81467 9.48863L10.1813 16.8553L17.548 9.48863C17.9738 9.063 18.3116 8.55765 18.5421 8.00143C18.7726 7.44521 18.8912 6.84904 18.8912 6.24697C18.8912 5.64489 18.7726 5.04872 18.5421 4.49251C18.3116 3.93629 17.9738 3.43093 17.548 3.0053Z" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"/>
    </svg>
  `;
  return li;
};
const loadFavoriteBooksTemplate = async () => {
  for (let i = 0; i < localList.length; i++) {
    let data = await loadFavoriteBooks(localList[i]);
    $favoriteBooks.appendChild(
      makeFavoriteBook(
        data[0]["isbn13"],
        data[0]["cover"],
        data[0]["title"],
        data[0]["priceStandard"],
        data[0]["author"],
        data[0]["publisher"],
        data[0]["description"]
      )
    );
  }
};

$heartModalBtn.addEventListener("click", (e) => {
  const target = e.target;
  if (!$modal.classList.contains("on")) {
    $modal.classList.add("on");
    $modalBackground.classList.add("on");
    loadFavoriteBooksTemplate();
  }
});
$modalClose.addEventListener("click", () => {
  $modal.classList.remove("on");
  $modalBackground.classList.remove("on");
});
