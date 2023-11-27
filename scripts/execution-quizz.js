let quizzSelecionado;
let elementoclicado;
const TEMPO_1S = 1;
let acertos = 0;
let questoesRespondidas = 0;
let totalPerguntas;

function selecionarQuizz(quizz) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizz}`)
    promise.then(function(response){
        quizzSelecionado = response.data;
        inserirBanner()
        gerarPerguntas()
    });
}

function inserirBanner() {
    console.log(quizzSelecionado)
    document.querySelector(".banner-quizz").innerHTML += `
    <img src=${quizzSelecionado.image}>
    <h1 class="title-banner">${quizzSelecionado.title}</h1>
    `
}

function gerarPerguntas(){
    const perguntas = quizzSelecionado.questions;
    console.log(perguntas)
     totalPerguntas = perguntas.length;
    for (let i = 0; i < totalPerguntas; i++) {
        let respostas = ""
        let pergunta = perguntas[i].answers;
        console.log(pergunta)
        for(let j = 0; j < pergunta.length; j++) {
            if(pergunta[j].isCorrectAnswer){
                respostas += `
                <div onclick="mostrarRespostas(this)" class="option certa">
                    <img src="${pergunta[j].image}">
                    <h2>${pergunta[j].text}</h2>
                </div>
                `
            } else {
                respostas += `
                <span onclick="mostrarRespostas(this)" class="option errada">
                    <img src="${pergunta[j].image}">
                    <h2>${pergunta[j].text}</h2>
                </span>
                `
            }

        }
        
        document.querySelector(".perguntas").innerHTML += `
        <div class="conteiner-question" id = "container${i}">
            <div class="title-question">${perguntas[i].title}</div>
            <div class="box-options">
            ${respostas}
            </div>
        </div>
        
        `
    }
} 

function mostrarRespostas(resposta){
    verificarResposta(resposta)
    resposta.parentNode.querySelector(".certa").classList.add("verde");
    let errada = resposta.parentNode.querySelectorAll(".errada");

    for(let i=0; i < errada.length; i++){
        errada[i].classList.add("vermelho");
    }

    let respostas = resposta.parentNode.querySelectorAll(".option");

    for(let i=0; i < respostas.length; i++){
        respostas[i].classList.add("opacidade");
        respostas[i].removeAttribute("onclick");
    }

    resposta.classList.remove("opacidade");

    verificarSeRespondeuTudo();
}

function verificarResposta(elemento) {
    elementoclicado = elemento;
     
    const elementoCerta = document.querySelector(".certa");
    if (elementoclicado === elementoCerta) {
      acertos += 1;
    }
    console.log(acertos)
  }

  function inserirTelaFinal() {
    let porcentagemAcerto = (acertos/totalPerguntas)*100;
    const result = document.querySelector(".conteiner-result")
    result.classList.remove("oculto")
    result.innerHTML += `
    <div class="result-question">
        <div class="result">
        <img src="../../images/logo/logo.png">
        </div>
        <div class="result">
        <h1>
        ${porcentagemAcerto.toFixed(2)}% de acerto: Parabéns
        </h1>
        </div>
    </div>
    `
    exibitionButtons()
  }

  function verificarSeRespondeuTudo() {
    questoesRespondidas += 1;
    if (questoesRespondidas === totalPerguntas) {
        setTimeout(inserirTelaFinal, 2000)
        questoesRespondidas = 0;
    }
  }

  function exibitionButtons(){
     document.getElementById('buttons').innerHTML += `
     <submit class="button"> Reiniciar Quizz</submit>
    <h1 class="subtitle"><a href="../../index.html">Voltar pra home</a></h1>
     `;

  }


selecionarQuizz(55);