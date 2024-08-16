const $pagination = document.querySelector(".pagination");
const $paginationNumber = document.querySelector(".paginationNumber");
const loadPagination = () => {
  $paginationNumber.innerHTML = `
        <span>1</span>
    `;
};
loadPagination();
