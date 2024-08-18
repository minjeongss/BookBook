const $pagination = document.querySelector(".pagination");
$pagination.addEventListener("click", (e) => {
  const $paginationNumber = e.target.closest(".paginationNumber");
  if ($paginationNumber) {
    console.log($paginationNumber);
  }
});

const loadPagination = () => {
  $pagination.querySelector(".paginationNumbers").innerHTML = `
        <span class="paginationNumber">1</span>
        <span class="paginationNumber">2</span>
    `;
};
loadPagination();
