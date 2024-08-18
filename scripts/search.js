const $searchResult = document.querySelector(".searchResult");
const $searchInput = document.querySelector(".searchInput");

const loadSearchResult = async () => {
  const inputValue = $searchInput.value;
  if (inputValue === "") {
    $books.replaceChildren();
    loadBooksTemplate();
    $searchResult.innerHTML = ``;
  } else {
    $books.replaceChildren();
    loadSearchBooksTemplate(inputValue);
    $searchResult.innerHTML = `"${inputValue}"에 대한 검색 결과입니다.`;
  }
};
$searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") loadSearchResult();
});
