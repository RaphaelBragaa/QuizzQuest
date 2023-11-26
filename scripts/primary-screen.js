// requisitando dados da Api //
let axios = new XMLHttpRequest();
axios.open(
  "GET",
  "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",
  true
);
axios.onreadystatechange = function () {
  if (axios.readyState === 4 && axios.status === 200) {
    let data = JSON.parse(axios.responseText);
    console.log(data);
  }
};
axios.send(null);
