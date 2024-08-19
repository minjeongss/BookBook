const $tost = document.querySelector(".tost");

const loadTost = (type, time) => {
  $tost.classList.remove("move");
  $tost.classList.remove("search");
  $tost.classList.remove("alert");
  $tost.classList.add("on");
  $tost.classList.add(type);
  if (type === "move") {
    $tost.innerHTML = "메인 화면으로 이동합니다 👀";
  } else if (type === "search") {
    $tost.innerHTML = `${$searchInput.value}에 대한 검색 결과를 보여드릴게요 🎯`;
  } else if (type === "alert") {
    $tost.innerHTML = `⚠️ 검색어는 25자 이내로 입력해주세요 ⚠️`;
  } else if (type === "favoriteAlert") {
    $tost.innerHTML = `⚠️ 즐겨찾기는 20개 이내만 가능합니다 ⚠️`;
  } else if (type === "favoriteAdd") {
    $tost.innerHTML = "즐겨찾기 등록이 완료되었습니다 ❤️";
  } else if (type === "favoriteDelete") {
    $tost.innerHTML = "즐겨찾기 삭제가 완료되었습니다 ✈️";
  }
  setTimeout(() => {
    $tost.classList.remove("on");
  }, time);
};
