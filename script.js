// Código Vanilla JS para comportamento SPA
function mostrarSecao(id) {
    // Seleciona todas as seções
    const secoes = document.querySelectorAll(".secao");

    // Oculta todas as seções
    secoes.forEach(secao => secao.style.display = "none");

    // Exibe apenas a seção clicada
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) { // Verifica se a seção existe
        secaoSelecionada.style.display = "block";
    }
}

// Opcional: Exibir a primeira seção ('inicio') por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('inicio')) {
        mostrarSecao('inicio');
    }
});