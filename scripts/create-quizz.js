const padraoURL = /^https?:\/\/.+\/.+$/
const padraoCor = /^#[0-9A-Fa-f]{6}$/

function ValidarTitulo() {
    const value = document.getElementById('fname1').value;
    if (value.length >= 20) {
      alert(value);
    } else {
      console.log("O texto da pergunta deve ter pelo menos 20 caracteres.");
    }
  }

  function ValidarCor(){
    const value = document.getElementById('fname2').value;
    
    if (!padraoCor.test(value)) {
        alert("A cor de fundo deve ser uma cor em hexadecimal.");
      }
  }

  function ValidarURL(){
    const value = document.getElementById('fname3').value;
    if(!padraoURL.test(value)){
        alert("Invalid URL")
    }
  }


function ValidarDados(){
    let d = document.getElementById('')
}