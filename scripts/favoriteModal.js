const $heartModalBtn = document.querySelector(".heartModalBtn");
const $modal = document.querySelector(".modal");
const $modalBackground = document.querySelector(".modalBackground");
const $modalClose = document.querySelector(".modalClose");
$heartModalBtn.addEventListener("click", (e) => {
  const target = e.target;
  if (!$modal.classList.contains("on")) {
    $modal.classList.add("on");
    $modalBackground.classList.add("on");
  }
});
$modalClose.addEventListener("click", () => {
  $modal.classList.remove("on");
  $modalBackground.classList.remove("on");
});
