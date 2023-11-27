
function mostrarFormulario(idFormulario) {
    // Oculta todos os formulários
    var formularios = document.querySelectorAll('.formulario');
    formularios.forEach(function(formulario) {
        formulario.style.display = 'none';
    });

    // Exibe o formulário específico
    var formularioSelecionado = document.getElementById(idFormulario);
    formularioSelecionado.style.display = 'flex';
    var iconEditar = document.getElementById("icon-editar");
    iconEditar.style.display = 'none';
    
}
var objetoRecuperado = localStorage.getItem('minhaChave');

function clonarFormulario(n) {
// Seleciona o formulário original
var formularioOriginal = document.querySelectorAll(".formulario");

// Loop para criar cópias e adicioná-las ao documento
for (var i = 1; i < n; i++) {
// Clone o formulário
var formularioClone = formularioOriginal.cloneNode(true);

// Mude os IDs dos elementos clonados para evitar IDs duplicados
formularioClone.id = "formularioClone" + i;

// Adiciona o formulário clonado ao corpo do documento
document.body.appendChild(formularioClone);
}
}