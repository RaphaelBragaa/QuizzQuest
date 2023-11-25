function validaCampos() {
    let inputTitulo = document.getElementById("txb-Titulo");
    var titulo = inputTitulo.value;
    let inputUrlImage = document.getElementById("txb-url");
    let url = inputUrlImage.value;
    let inputNivel = document.getElementById("txb-niveis");
    let nivel = inputNivel.value;
    let inputNQuestoes = document.getElementById("txb-qt-perguntas");
    let qtdePerguntas = inputNQuestoes.value;
    let msgError = 'preencha todos os campos';

    if (titulo == '' || url == '' || nivel == '' || qtdePerguntas == '') {
        alert(msgError);
    } else {
        // Faça algo com os valores dos campos
        // Construir a URL com parâmetros de consulta
        var urlDestino = 'create-question.html' + 
            '?var1=' + encodeURIComponent(titulo) + 
            '&var2=' + encodeURIComponent(url) + 
            '&var3=' + encodeURIComponent(nivel) +
            '&var4=' + encodeURIComponent(qtdePerguntas);

        // Redirecionar para a próxima página
        window.location.href = urlDestino;    }
}
