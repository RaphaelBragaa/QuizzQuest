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

    }

    else if (titulo.length < 20 || titulo.length > 65) {
        alert('O título deve conter no mínimo 20 caracteres e no máximo 65 caracteres.');
    }
    else if (qtdePerguntas < 3) {
        alert('A quantidade de perguntas precisa ser maior que 3');
    }
    else if (nivel < 2) {
        alert('O nível deve ser no minimo 2');
    }

    else {
        // Faça algo com os valores dos campos
        // Construir a URL com parâmetros de consulta
        localStorage.setItem('var1', titulo);
        localStorage.setItem('var2', url);
        localStorage.setItem('var3', nivel);
        localStorage.setItem('var4', qtdePerguntas);

        // Redirecionar para a próxima página
        window.location.href = '../pagina2.html';
    }
}
