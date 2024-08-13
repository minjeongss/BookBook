const $books = document.querySelector(".books");

const makeLi = () => {
  const li = document.createElement("li");
  li.classList.add("book");
  li.innerHTML = `
    <img class="cover" src="./images/bookCover.jpg" alt="book image"/>
    <img class="heartBtn" src="./images/heart.svg" alt="heart image"/>
    <div>
        <p>{책 제목}</p>
        <p>{}원</p>
        <p>{저작자/출판사}</p>
    </div>
  `;
  return li;
};
const loadBooks = () => {
  for (let i = 0; i < 8; i++) {
    $books.appendChild(makeLi());
  }
};
loadBooks();
