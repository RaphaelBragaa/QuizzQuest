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
     //let open = element.closest('.icons');
            
     form.classList.add("subOculto")
     form.classList.remove("maxHeight")
     exit.classList.remove("oculto")
     form.classList.add("row")
 }
 
 function ValidarTitulo() {
     const value = document.getElementById('fname1').value;
     if (value.length >= 20) {
       alert(value);
       return true;
     } else {
       console.log("O texto da pergunta deve ter pelo menos 20 caracteres.");
     }
   }
 
   function ValidarCor(){
     const value = document.getElementById('fname2').value;
     
     if (!padraoCor.test(value)) {
         alert("A cor de fundo deve ser uma cor em hexadecimal.");
         return true;
       }
   }
 
   function ValidarURL(){
     const value = document.getElementById('fname4').value;
     if(!padraoURL.test(value)){
         alert("Invalid URL")   
     }else{
        return true;
     }
   }
 
   function validarRespostas() {
    const resposta = document.querySelectorAll("fname3");
  
    let respostaCorreta = false;
    for (let i = 0; i < resposta.length; i++) {
      if (resposta[i].value != "") {
        respostaCorreta = true;
        console.log("resposta OK")
      }
       if (!respostaCorreta) {
      alert("É obrigatória a inserção da resposta correta.");
      return false;
    }

    }
    return true;
  } 
  function validarIncorreta(){
        const incorreta = document.querySelectorAll("fname5");
        let incorretaLista = [];
        for (let i = 0; i < incorreta.length; i++){
            if (incorreta[i].value != "") {
                incorretaLista.push(incorreta[i].value);
                respostaCorreta = true;
                if(incorretaLista.length >= 2){
                    return true;  
                }   
              }else{
                alert("Deve ter no mínimo duas respostas incorretas");
              }
        }

    }
function ValidadeFinal(){
    if(ValidarCor() == true && ValidarTitulo() == true && validarRespostas() == true && validarIncorreta() == true){
        alert('SUCESSO')
    }else{
        alert('FALHA')
    }
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
                <input onclick="selecionarElemento(this)" type="text" id="fname1" name="fname" placeholder="Texto da Pergunta">
                <input onclick="selecionarElemento(this)" type="text" id="fname2" name="fname" placeholder="Cor da Pergunta">
                <label class="subLabel" for="fname">Resposta correta</label>
                <input onclick="selecionarElemento(this)" type="text" id="fname3" name="fname" placeholder="Resposta Corrreta">
                <input onclick="selecionarElemento(this)" type="text" id="fname4" name="fname" placeholder="URL da Imagem">
                <label class="subLabel" for="fname">Resposta incorreta</label>
                <input onclick="selecionarElemento(this)" type="text" id="fname5" name="fname" placeholder="Resposta incorreta 1">
                <input onclick="selecionarElemento(this)" type="text" id="fname" name="fname" placeholder="URL da Imagem 1">
                <input onclick="selecionarElemento(this)" type="text" id="fname5" name="fname" placeholder="Resposta incorreta 2">
                <input onclick="selecionarElemento(this)" type="text" id="fname" name="fname" placeholder="URL da Imagem 2">
                <input onclick="selecionarElemento(this)" type="text" id="fname5" name="fname" placeholder="Resposta incorreta 3">
                <input onclick="selecionarElemento(this)" type="text" id="fname" name="fname" placeholder="URL da Imagem 3"></input>
                <div id="exit" onclick="FecharForms(this)" class="minimize"><ion-icon name="chevron-up-outline"></ion-icon></div>
            </form>
        `
            analise.push(coletor.innerHTML)
            
}
            }

MostrarPerguntas()