let pergunta;
let analise = []
const padraoURL = /^https?:\/\/.+\/.+$/
 const padraoCor = /^#[0-9A-Fa-f]{6}$/

function AbrirForms(element){
    let icon = element.closest('.icons');
    let form = element.closest('form');

    icon.classList.add("op")
    form.classList.remove("row")
    form.classList.add("maxHeight")
    form.classList.remove("subOculto")
}

 function FecharForms(element){
     let exit = element.closest('div');
     let form = element.closest('form');
            
     form.classList.add("subOculto")
     form.classList.remove("maxHeight")
     exit.classList.remove("oculto")
     form.classList.add("row")
 }
 
 function ValidarTitulo(form) {
    const value = form.querySelector("#fname1").value;
    if (value.length >= 20) {
      return true;
    } else {
      alert("O texto da pergunta deve ter pelo menos 20 caracteres.");
      return false;
    }
  }
  
  function ValidarCor(form) {
    const value = form.querySelector("#fname2").value;
  
    if (!padraoCor.test(value)) {
      alert("A cor de fundo deve ser uma cor em hexadecimal.");
      return false;
    } else {
      return true;
    }
  }
  
  function ValidarURL(form, classChoice) {
    const value = form.querySelector("#" + classChoice).value;
    if (!padraoURL.test(value)) {
      alert("Invalid URL");
      return false;
    } else {
      return true;
    }
  }
  
  function ValidarRespostas(form) {
    const respostas = form.querySelectorAll("#fname3");
  
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i].value === "") {
        alert("É obrigatória a inserção da resposta correta.");
        return false;
      }
    }
  
    return true;
  }

  
  function ValidarIncorreta(form) {
    const incorretas = form.querySelectorAll("#fname5");
  
    if (incorretas.length < 2) {
      alert("Deve ter no mínimo duas respostas incorretas");
      return false;
    }
  
    return true;
  }

  function ValidadeFinal() {
    const forms = document.querySelectorAll("#form");
  
    for (let i = 0; i < forms.length; i++) {
      const form = forms[i];
  
      if (
        !ValidarTitulo(form) ||
        !ValidarCor(form) ||
        !ValidarURL(form, "fname4") ||
        !ValidarURL(form, "fname6") ||
        !ValidarURL(form, "fname7") ||
        !ValidarRespostas(form) ||
        !ValidarIncorreta(form)
      ) {
        alert("Falha na validação do formulário " + (i + 1));
        return;
      }
    }

    alert("SUCESSO");
  }
      

function MostrarPerguntas(){
   pergunta = 4
   // parseInt(prompt("Quantas Perguntas?"))
    
const coletor = document.querySelector("#bug")
for (let i = 1; i <= pergunta; i++){
            coletor.innerHTML += ` 
            <form id="form" class="row subOculto">          
                <label for="fname" >Pergunta ${i} </label>
                <img id="open" onclick="AbrirForms(this)" class="icons" src="../../images/icons/Vector.svg">
                <input  type="text" id="fname1" name="fname" placeholder="Texto da Pergunta">
                <input  type="text" id="fname2" name="fname" placeholder="Cor da Pergunta">
                <label class="subLabel" for="fname">Resposta correta</label>
                <input  type="text" id="fname3" name="fname" placeholder="Resposta Corrreta">
                <input  type="text" id="fname4" name="fname" placeholder="URL da Imagem">
                <label class="subLabel" for="fname">Resposta incorreta</label>
                <input  type="text" id="fname5" name="fname" placeholder="Resposta incorreta 1">
                <input  type="text" id="fname6" name="fname" placeholder="URL da Imagem 1">
                <input  type="text" id="fname5" name="fname" placeholder="Resposta incorreta 2">
                <input  type="text" id="fname7" name="fname" placeholder="URL da Imagem 2">
                <input  type="text" id="fname5" name="fname" placeholder="Resposta incorreta 3">
                <input  type="text" id="fname" name="fname" placeholder="URL da Imagem 3"></input>
                <div id="exit" onclick="FecharForms(this)" class="minimize"><ion-icon name="chevron-up-outline"></ion-icon></div>
            </form>
        `
            analise.push(coletor.innerHTML)
            
}
            }

MostrarPerguntas();