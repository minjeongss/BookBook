const $heartModalBtn = document.querySelector(".heartModalBtn");
const $modal = document.querySelector(".modal");
const $modalBackground = document.querySelector(".modalBackground");
const $modalClose = document.querySelector(".modalClose");
const $favoriteBooks = document.querySelector(".favoriteBooks");

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
  $favoriteBooks.replaceChildren();

  //모달 내부 즐겨찾기 취소한 결과 반영하는 부분
  $books.replaceChildren();
  if ($searchInput.value === "") {
    loadBooksTemplate(currentPage);
  } else {
    loadSearchBooksTemplate($searchInput.value);
  }
  //! fetch로 인한 시간 지연으로 DOM 로드가 완전히 될 때까지 대기함
  setTimeout(() => {
    console.log("SUCCESS LOAD HEART");
    getFromLocal();
  }, 1000);
});

$favoriteBooks.addEventListener("click", (e) => {
  const targetHeart = e.target.closest(".heartBtn");
  if (targetHeart) {
    const isbn = e.target
      .closest(".favoriteBook")
      .querySelector(".isbn").innerText;
    if (targetHeart.classList.contains("on")) {
      deleteToLocal(isbn);
    } else {
      saveToLocal(isbn);
    }
    if (!isFavoriteLimit) targetHeart.classList.toggle("on");
  }
});
