let quizzSelecionado;
let elementoclicado;
const TEMPO_1S = 1;
let acertos = 0;
let questoesRespondidas = 0;
let totalPerguntas;
let quizz = localStorage.getItem("id");
let message;

//SELECIONAR O QUIZZ APARTIR DE SEU ID QUE E FORNECIDO PELO LOCAL ESTORAGE DA TELA DE LISTA DE QUIZZ
function selecionarQuizz(quizz) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizz}`)
    promise.then(function(response){
        quizzSelecionado = response.data;
        inserirBanner()
        gerarPerguntas()
    });
}

//EXIBIR BANNER COM CAPA E TÍTULO DO QUIZZ
function inserirBanner() {
    console.log(quizzSelecionado)
    document.querySelector(".banner-quizz").innerHTML += `
    <img src=${quizzSelecionado.image}>
    <h1 class="title-banner">${quizzSelecionado.title}</h1>
    `
}

//GERA AS PERGUNTAS DINÂMICAMENTE APARTIR DA ARRAY DE OBJETOS FORNECIDA PELA API
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

//APÓS A SELEÇÃO DA OPÇÃO ESSA FUNÇÃO ANALISA AQUELA OPÇÃO
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

//CONTABILIZA A QUANTIDADE DE ACERTOS DO USUARIO
function verificarResposta(elemento) {
    elementoclicado = elemento;
    if (elementoclicado.classList.contains("certa")) {
      acertos += 1;
    }
    console.log(acertos + " ACERTO")
  }

  //EXIBE O RESULTADO FINAL DO QUIZZ
  function inserirTelaFinal() {
    let porcentagemAcerto = (acertos/totalPerguntas)*100;
    console.log(porcentagemAcerto)

    if(porcentagemAcerto.toFixed(2) == 100){
        message = "Parabéns"
    }else if(porcentagemAcerto.toFixed(2) >= 50){
        message = "Pode Melhorar"
    }else if(porcentagemAcerto.toFixed(2) <= 49){
        message = "Estude Mais !"
    }

    const result = document.querySelector(".conteiner-result")
    result.classList.remove("oculto")
    result.innerHTML += `
    <div class="result-question">
        <div class="result">
        <img src="../../images/logo/logo.png">
        </div>
        <div class="result">
        <h1>
        ${porcentagemAcerto.toFixed(2)}% de acerto: ${message}
        </h1>
        </div>
    </div>
    `
    exibitionButtons()
  }

//VERIFICA TO TODAS AS PERGUNTAS FORAM RESPONDIDAS
  function verificarSeRespondeuTudo() {
    questoesRespondidas += 1;
    if (questoesRespondidas === totalPerguntas) {
        setTimeout(inserirTelaFinal, 2000)
        questoesRespondidas = 0;
    }
  }

  //EXIBI OS BOTÕES DE REINICIAR E VOLTAR PARA O HOME 
  function exibitionButtons(){
     document.getElementById('buttons').innerHTML += `
     <submit onclick="reniciarQuizz()" class="button"> Reiniciar Quizz</submit>
    <h1 class="subtitle"><a href="../../index.html">Voltar pra home</a></h1>
     `;
  }

  //ZERA O QUIZZ
  function reniciarQuizz() {
    window.location.reload();
  }


selecionarQuizz(quizz);