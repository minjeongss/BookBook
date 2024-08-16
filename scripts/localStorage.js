const $books = document.querySelector(".books");
let localList = [];

//localStorage로부터 값 불러오기
const getFromLocal = () => {
  const prevList = JSON.parse(localStorage.getItem("isbnList"));
  if (prevList) {
    localList = prevList;
    const book = $books.children;
    for (let i = 0; i < book.length; i++) {
      const isbn = book[i].querySelector(".isbn").innerText;
      if (localList.includes(isbn)) {
        book[i].querySelector(".heartBtn").classList.add("on");
      }
    }
  } else {
    localList = [];
  }
};

//loclaStorage에 값 저장하기
const saveToLocal = (isbn) => {
  if (localList.length >= 0 && localList.length <= 4) {
    localList.push(isbn);
    localStorage.setItem("isbnList", JSON.stringify(localList));
  } else {
    alert("⚠️ 좋아요의 최대 개수는 20개입니다 ⚠️");
  }
};

//각각의 책에 조재하는 버튼 눌렀을 때, localStorage에 값 삭제하기
const deleteToLocal = (isbn) => {
  const updateList = localList.filter((elem) => elem !== isbn);
  localList = updateList;
  if (updateList && updateList.length > 0) {
    localStorage.setItem("isbnList", JSON.stringify(updateList));
  } else {
    // localList가 빈 배열이면 localStorage에서 해당 항목을 제거합니다.
    localStorage.removeItem("isbnList");
  }
};

$books.addEventListener("click", (e) => {
  const targetBook = e.target;
  if (targetBook.classList.contains("book")) {
    // console.log(li);
  }
  const targetHeart = e.target.closest(".heartBtn");
  if (targetHeart) {
    const isbn = e.target.closest(".book").querySelector(".isbn").innerText;
    if (targetHeart.classList.contains("on")) {
      deleteToLocal(isbn);
    } else {
      saveToLocal(isbn);
    }
    targetHeart.classList.toggle("on");
  }
});
$books.addEventListener("mouseout", (e) => {
  const li = e.target;
  if (li.classList.contains("book")) {
    // console.log(li);
  }
});

const initLocal = () => {
  //! fetch로 인한 시간 지연으로 DOM 로드가 완전히 될 때까지 대기함
  setTimeout(() => {
    console.log("SUCCESS LOAD HEART");
    getFromLocal();
  }, 1000);
};
initLocal();
