const $books = document.querySelector(".books");
let localList = [];

const saveToLocal = (isbn) => {
  if (localList.length >= 0 && localList.length <= 4) {
    localList.push(isbn);
    localStorage.setItem("isbnList", JSON.stringify(localList));
  } else {
    alert("⚠️ 좋아요의 최대 개수는 20개입니다 ⚠️");
  }
};
$books.addEventListener("click", (e) => {
  const targetBook = e.target;
  if (targetBook.classList.contains("book")) {
    // console.log(li);
  }
  const targetHeart = e.target.closest(".heartBtn");
  if (targetHeart) {
    targetHeart.classList.toggle("on");
    const isbn = e.target.closest(".book").querySelector(".isbn").innerText;
    saveToLocal(isbn);
  }
});
$books.addEventListener("mouseout", (e) => {
  const li = e.target;
  if (li.classList.contains("book")) {
    // console.log(li);
  }
});
