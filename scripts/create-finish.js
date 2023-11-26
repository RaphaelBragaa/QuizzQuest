let quizz;
let url;

function Redirect(url) {
    window.location.href = url;
  }  

function MostrarConclusão(){
    const coletor = document.querySelector("#box-finish")
    quizz = {
        img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/08/PM_formatura.jpg",
        title: "O quanto você sabe sobre a PM?"
    }
    coletor.innerHTML = `
                        <img src=${quizz.img}>
                        <h1 class="title-quiz">${quizz.title}</h1>
                        `
}

MostrarConclusão()