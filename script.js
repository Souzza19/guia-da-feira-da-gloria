
function mostrarSecao(id) {
    
    const secoes = document.querySelectorAll(".secao");

    
    secoes.forEach(secao => secao.style.display = "none");

    
    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) { 
        secaoSelecionada.style.display = "block";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('inicio')) {
        mostrarSecao('inicio');
    }
});
