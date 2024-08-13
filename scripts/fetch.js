const getData = () => {
  fetch("http://localhost:3000/api/search?query=aladdin")
    .then((response) => response.json())
    .then((data) => {
      console.log("API 응답 데이터:", data.item);
    })
    .catch((error) => {
      console.error("API 요청 중 오류 발생:", error);
      document.getElementById("result").innerText =
        "오류 발생: " + error.message;
    });
};
// getData();
