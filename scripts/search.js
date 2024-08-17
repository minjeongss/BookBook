const $searchResult = document.querySelector(".searchResult");
const $searchInput = document.querySelector(".searchInput");

const loadSearchResult = async () => {
  const inputValue = $searchInput.value;
  if (inputValue === "") {
    $books.replaceChildren();
    loadBooks();
    $searchResult.innerHTML = ``;
  } else {
    const data = await loadSearchBooks(inputValue);
    $books.replaceChildren();
    loadBooksTemplate(data);
    $searchResult.innerHTML = `"${inputValue}"에 대한 검색 결과입니다.`;
  }
};
$searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") loadSearchResult();
});
