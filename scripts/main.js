const $books = document.querySelector(".books");

$books.addEventListener("click", (e) => {
  const targetBook = e.target;
  if (targetBook.classList.contains("book")) {
    // console.log(li);
  }
  const targetHeart = e.target.closest(".heartBtn");
  if (targetHeart) {
    targetHeart.classList.toggle("on");
  }
});
$books.addEventListener("mouseout", (e) => {
  const li = e.target;
  if (li.classList.contains("book")) {
    // console.log(li);
  }
});

// const init = () => {
//   loadBooksTemplate();
// };
// init();
