'use strict';
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

const projectDescriptions = {
  "page-budget": `
  <h2>Detalhes do projeto</h2><br>
    Você pode inserir o valor total do seu orçamento na caixa de entrada correspondente e clicar no botão "Definir orçamento".
    O valor do orçamento é exibido na seção de "Totalizando" e é usado para calcular o saldo restante.
    Para adicionar uma despesa, insira o título do produto e seu custo na seção "Despesas" e clique no botão "Verificar o valor".
    As despesas adicionadas são exibidas na lista de despesas abaixo, com opções para editar ou excluir cada entrada.
    O saldo restante é atualizado automaticamente conforme você adiciona ou remove despesas. Isso permite que você acompanhe
    facilmente quanto dinheiro ainda está disponível dentro do seu orçamento.
  `,
  "interface-api": `
  <h2>Detalhes do projeto</h2><br>
    Este projeto é uma interface de consulta de banco de dados que utiliza uma API para buscar dados em tempo real.
    A interface é simples e intuitiva, permitindo que o usuário pesquise e filtre os dados com facilidade.
    O design é responsivo e se adapta a diferentes tamanhos de tela, oferecendo uma experiência de usuário consistente.
  `,
  "horizon-dashboard": `
  <h2>Detalhes do projeto</h2><br>
    O Horizon Dashboard é uma aplicação React que utiliza Styled Components e Vite para uma experiência rápida e modular.
    O dashboard permite a visualização de dados analíticos de forma clara e organizada, com gráficos interativos e personalizáveis.
    A estrutura modular do código facilita a manutenção e a adição de novas funcionalidades.
  `,
  "novabank-typescript": `
  <h2>Detalhes do projeto</h2><br>
    O NovaBank é um projeto que simula as operações básicas de um banco, com funcionalidades como gerenciamento de contas, transações e formatação de dados de transação. O projeto contará com o desenvolvimento de:
Classe conta e armazenador;
Atributos e construtor de conta;
Modificadores de acesso;
Métodos estáticos;
Herança de classes;
Decorators de validação.
  `,
  "taskbuddy": `
  <h2>Detalhes do projeto</h2><br>
    O aplicativo de tarefas TaskBuddy foi desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários criem, editem e
    excluam tarefas de forma simples e intuitiva. As tarefas são organizadas em uma lista, e o usuário pode marcar como concluídas
    ou excluir tarefas conforme necessário.
  `,
  "super-hero-api": `
  <h2>Detalhes do projeto</h2><br>
    Este projeto é uma interface de consulta para a API de super-heróis. O usuário pode buscar informações sobre seus super-heróis
    favoritos, incluindo poderes, habilidades e histórico. A interface é interativa e fácil de usar, permitindo uma navegação
    fluida e rápida entre as informações dos personagens.
  `
};

function openPopup(projectId) {
  const popup = document.getElementById("popup");
  const descriptionElement = document.getElementById("project-description");

  descriptionElement.innerHTML = projectDescriptions[projectId];

  popup.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.style.overflow = "";
}


