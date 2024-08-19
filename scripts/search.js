const $searchResult = document.querySelector(".searchResult");
const $searchInput = document.querySelector(".searchInput");

const loadSearchResult = async () => {
  const inputValue = $searchInput.value;
  $books.replaceChildren();
  $paginationNumbers.replaceChildren();
  currentPage = 1;
  calculatePagination();

  if (inputValue === "") {
    loadTost("move", 1000);
    $searchResult.innerHTML = ``;
  } else {
    loadTost("search", 1000);
    $searchResult.innerHTML = `<p>${inputValue}</p>에 대한 검색 결과입니다 😊`;
  }
};
$searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.target.value.length > 25) {
    loadTost("alert", 1500);
  }
  if (e.key === "Enter") loadSearchResult();
});
