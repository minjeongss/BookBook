const $searchResult = document.querySelector(".searchResult");
const $searchInput = document.querySelector(".searchInput");

const loadSearchResult = async () => {
  const inputValue = $searchInput.value;
  $searchResult.innerHTML =
    inputValue === ""
      ? `"${inputValue}"에 대한 검색 결과입니다.`
      : `"${inputValue}"에 대한 검색 결과입니다.`;
  const data = await loadSearchBooks(inputValue);
  $books.replaceChildren();
  loadBooksTemplate(data);
};
$searchInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") loadSearchResult();
});
