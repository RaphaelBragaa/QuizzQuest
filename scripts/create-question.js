let pergunta;
let analise = []

function MostrarPerguntas(){
   pergunta = parseInt(prompt("Quantas Perguntas?"))
    
const coletor = document.querySelector("#bug")
for (let i = 1; i <= pergunta; i++){
            
            coletor.innerHTML += `           
            <div class="topicos margint">Pergunta ${i} <img class="icon"src="../../images/icons/Vector.svg"></div>
            <div class="caixona">
                <input onclick="selecionarElemento(this)" class="titlePergunta marginb" placeholder="Texto da pergunta"></input>
                <input onclick="selecionarElemento(this)" class="corFundo" placeholder="Cor de fundo da pergunta"></input>
                <div class="topicos marginl">Resposta Correta</div>
                <input onclick="selecionarElemento(this)" class="respCorreta marginb" placeholder="Resposta correta"></input>
                <input onclick="selecionarElemento(this)" class="URLresp" placeholder="URL da imagem"></input>
                <div class="topicos marginl">Resposta Incorreta</div>
                <input onclick="selecionarElemento(this)" class="respIncorreta marginb" placeholder="Resposta incorreta 1"></input>
                <input onclick="selecionarElemento(this)" class="URLresp1 marginb " placeholder="URL da imagem 1"></input>
                <input onclick="selecionarElemento(this)" class="respIncorreta2 marginb margint" placeholder="Resposta incorreta 2"></input>
                <input  onclick="selecionarElemento(this)" class="URLresp2 marginb" placeholder="URL da imagem 2"></input>
                </div>`
        
            analise.push(coletor.innerHTML)
            
}
    console.log(analise)
            }

            MostrarPerguntas()