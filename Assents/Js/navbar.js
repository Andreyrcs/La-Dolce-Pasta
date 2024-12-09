/*const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});*/

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
      searchIcon.classList.replace("uil-search", "uil-times");
    } else {
      searchIcon.classList.replace("uil-times", "uil-search");
    }
  });
}

if (navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
  });
}

if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  });
}


window.addEventListener("scroll", function() {
  // Seleciona o elemento nav e a seção parte-comercial
  const nav = document.querySelector('nav');
  const parteComercial = document.querySelector('.parte-comercial');

  // Pega a distância do topo até a seção parte-comercial
  const parteComercialTop = parteComercial.offsetTop;

  // Se o scrollY (scroll vertical) for maior ou igual à posição da parte-comercial, mostra o nav
  if (window.scrollY >= parteComercialTop) {
      nav.classList.add('visible'); // Adiciona classe que torna o nav visível
  } else {
      nav.classList.remove('visible'); // Remove a classe para esconder o nav
  }
});
