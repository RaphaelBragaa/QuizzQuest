//export {IDdoQuizdoServidor};

let IDdoQuizdoServidor;
const body = document.querySelector("body");
let page1;
let quizzesServidor;

carregarPagina1();

//SOLICITA API OS QUIZZES
function carregarPagina1() {
  const promiseQuizzes = axios.get(
    "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"
  );
  promiseQuizzes.then(renderizarQuizzes);
  renderizarTelaDeCarregamento();
}

//RENDERIZA TODOS OS QUIZZES NA TELA 
function renderizarQuizzes(response) {
  body.innerHTML = `<header> 	<img src="/images/quiz.png" class="logo"  onclick="carregarPagina1() > "></header>
        <main class="page1"></main>`;
  page1 = document.querySelector(".page1");

  quizzesServidor = response.data;
  conteudoStorage = JSON.parse(localStorage.getItem("ID"));

  if (conteudoStorage == null || conteudoStorage.length == 0) {
    renderizarQuizzesNovos();
  } else {
    renderizarQuizzesUsuario();
  }
  renderizarQuizzesTodos();
}

//RENDERIZA QUIZZES CRIADOS PELO USUARIO
function renderizarQuizzesUsuario() {
  page1.innerHTML += `<div class="quiz quiz--usuario">
            <div class="cabecalho"><h2>Seus Quizzes</h2><ion-icon onclick="carregarPagina3()" name="add-circle"></ion-icon></div>
            <ul class="quiz__lista"></ul>
        </div>`;
  let listaDeIDs = JSON.parse(localStorage.getItem("ID"));
  let listaDeKeys = JSON.parse(localStorage.getItem("keyDoQuiz"));

  for (let j = 0; j < listaDeIDs.length; j++) {
    const quizzesDoUsuario = axios
      .get(
        `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${listaDeIDs[j]}`
      )
      .then((response) => {
        const image = response.data.image;
        const title = response.data.title;
        const lista = document.querySelector(".quiz--usuario .quiz__lista");
        lista.innerHTML += `
                <li class="quizz">
                    <img src=${image} alt="">
                    <div class="quizz-configuracao">
                        <ion-icon class="edit" name="create-outline" onclick="carregarEdicao('${listaDeIDs[j]}','${listaDeKeys[j]}')"></ion-icon>
                        <ion-icon class="trash" name="trash-outline" onclick="deleteQuiz('${listaDeIDs[j]} ', '${listaDeKeys[j]}','${j}')"></ion-icon>
                    </div>
                    <div class="gradiente" onclick="geraQuiz(${listaDeIDs[j]})"></div>
                    <h3>${title}</h3>
                </li>
            `;
      });
  }
}

//RENDERIZA OS QUIZZES NOVOS
function renderizarQuizzesNovos() {
  page1.innerHTML += `<div class="quiz quiz--novo">
            <p>Você não criou nenhum quizz ainda :(</p>
            <div class="button" >Criar Quizz</div>
        </div>`;
}

//RENDERIZA TODOS OS QUIZZES
function renderizarQuizzesTodos() {
  page1.innerHTML += `<h2 class="h2">TODOS OS QUIZZES</h2>
   <div class=" quiz--todos">
            
            <ul class="quiz__lista"></ul>
        </div>`;
  for (var i = 0; i < quizzesServidor.length; i++) {
    let listaDeIDs = JSON.parse(localStorage.getItem("ID"));
    if (listaDeIDs == null || !listaDeIDs.includes(quizzesServidor[i].id)) {
      const image = quizzesServidor[i].image;
      const title = quizzesServidor[i].title;
      const lista = document.querySelector(".quiz--todos .quiz__lista");
      lista.innerHTML += `
            <li class="quizz">
                <img src=${image} alt="">
                <div class="gradiente" onclick="LocalIdd(${quizzesServidor[i].id})"></div>
                <h3>${title}</h3>
            </li>`;
    }
  }

  console.log(localStorage.getItem("id"))
}

//RENDERIZA A TELA PRÉ LISTA DE QUIZZES
function renderizarTelaDeCarregamento() {
  body.innerHTML = `
        <header><h1>BuzzQuizz</h1></header>
        <div class="overlay">
            <img src="/images/spinner.gif" alt="gif de spinner">
            <p class="overlay__texto">Carregando</p> 
        </div>
    `;
}

//ARMAZENA O IDENTIFICADOR DO QUIZZ 
function LocalIdd(element){

  if(!localStorage.getItem("id")){
    localStorage.setItem('id', element)
    IDdoQuizdoServidor = localStorage.getItem("id");
    console.log(IDdoQuizdoServidor + " sucesso")
    location.href = "./pages/execution-quizz/execution-quizz.html";
  }else{
    localStorage.removeItem("id");
    localStorage.setItem('id', element)
    IDdoQuizdoServidor = localStorage.getItem("id");
    console.log(IDdoQuizdoServidor + " else")
    location.href = "./pages/execution-quizz/execution-quizz.html";
  }

}
// Assuming this code is in a module