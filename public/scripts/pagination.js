const $pagination = document.querySelector(".pagination");
const $paginationNumbers = document.querySelector(".paginationNumbers");
/**
 * 설정값
 * - currentPage: 현재 페이지
 * - totalCount: 총 데이터의 개수
 * - pageCount: 화면에 나타날 페이지 개수
 * - limit: 한 화면에 나타낼 데이터의 개수=8(고정)
 */

let currentPage = 1;
let totalCount = 200;
const pageCount = 5;
const limit = 8;
let totalPage = Math.ceil(totalCount / limit);

/**
 * 계산법
 * https://min-kyung.tistory.com/30
 * - 총 페이지 계산
 * 총 데이터 개수를 한 화면에 나타낼 데이터의 개수로 나누기
 * 단, 마지막 페이지를 위해 올림으로 계산
 *
 * - 현재 페이지 그룹 계산
 * 현재 페이지가 몇 번째 그룹에 존재하는지 확인 필요
 * 현재 페이지를 화면에 나타낼 페이지의 개수로 나누기
 * 단, ~를 위해 올림으로 계산
 *
 * - 현재 페이지 그룹의 첫 번째/마지막 페이지 구하기
 * 마지막 페이지는 페이지 그룹에서 limit을 곱하기
 * 단, 전체 페이지보다 큰 경우 전체 페이지를 할당
 *
 * 첫 번째 페이지는 마지막 페이지에서 limit-1을 빼기
 *
 * 이전, 다음 버튼은 첫 번쨰 페이지에서 1을 빼기, 마지막 페이지에서 1을 더하기
 *
 * - 페이지네이션 그리기
 * 첫 번쨰 페이지부터 마지막 페이지까지 for문으로 순회하며 버튼 그리기
 */

const calculatePagination = async () => {
  await loadBookAPI();
  totalPage = Math.ceil(totalCount / limit);
  let pageGroup = Math.ceil(currentPage / pageCount);
  let lastNumber = pageGroup * pageCount;
  if (lastNumber > totalPage) {
    lastNumber = totalPage;
  }
  let firstNumber = lastNumber - (pageCount - 1);
  console.log("total:", totalPage, "pageGroup", pageGroup);

  loadPagination(firstNumber, lastNumber);
};

const loadBookAPI = async () => {
  console.log("load!");
  $books.replaceChildren();
  if ($searchInput.value === "") {
    await loadBooksTemplate(currentPage);
  } else {
    await loadSearchBooksTemplate($searchInput.value, currentPage);
  }
};
const loadPagination = (firstNumber, lastNumber) => {
  for (let i = firstNumber; i <= lastNumber; i++) {
    let p = document.createElement("p");
    p.innerHTML = `${i}`;
    p.classList.add("paginationNumber");
    if (i === currentPage) p.classList.add("current");
    if (firstNumber === 1) {
      document.querySelector(".prevBtn").classList.add("firstPage");
    } else if (lastNumber === totalPage) {
      document.querySelector(".nextBtn").classList.add("lastPage");
    } else {
      document.querySelector(".prevBtn").classList.remove("firstPage");
      document.querySelector(".nextBtn").classList.remove("lastPage");
    }
    $paginationNumbers.appendChild(p);
  }
};

$pagination.addEventListener("click", (e) => {
  const $paginationNumber = e.target.closest(".paginationNumber");
  const $prevBtn = e.target.closest(".prevBtn");
  const $nextBtn = e.target.closest(".nextBtn");

  if ($paginationNumber) {
    const clickPage = $paginationNumber.innerHTML;
    const pageDiff = clickPage - currentPage;
    if (pageDiff !== 0) {
      currentPage += pageDiff;
      $paginationNumbers.replaceChildren();
      calculatePagination();
      //! fetch로 인한 시간 지연으로 DOM 로드가 완전히 될 때까지 대기함
      setTimeout(() => {
        console.log("SUCCESS LOAD HEART");
        getFromLocal();
      }, 1000);
    }
  }
  if ($prevBtn) {
    console.log($prevBtn);
    if (currentPage - 5 >= 1) {
      currentPage -= 5;
      $paginationNumbers.replaceChildren();
      calculatePagination();
      //! fetch로 인한 시간 지연으로 DOM 로드가 완전히 될 때까지 대기함
      setTimeout(() => {
        console.log("SUCCESS LOAD HEART");
        getFromLocal();
      }, 1000);
    }
  }

  if ($nextBtn) {
    console.log($nextBtn);
    if (currentPage + 5 <= totalPage) {
      currentPage += 5;
      $paginationNumbers.replaceChildren();
      calculatePagination();
      //! fetch로 인한 시간 지연으로 DOM 로드가 완전히 될 때까지 대기함
      setTimeout(() => {
        console.log("SUCCESS LOAD HEART");
        getFromLocal();
      }, 1000);
    }
  }
});

const init = () => {
  calculatePagination();
};
init();
