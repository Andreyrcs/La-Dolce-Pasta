const pre_carregamento = document.querySelector("div.pre-carregamento");
const conteudo = document.querySelector(".conteudo");

function preCarregamento() {
    pre_carregamento.style.opacity = "0"; // Diminui a opacidade para iniciar a transição

    // Aguarda o tempo da transição de opacidade antes de esconder
    setTimeout(() => {
        pre_carregamento.style.display = "none"; // Oculta a tela de carregamento
        
    }, 2500); // Tempo igual ao definido na transição CSS
}
