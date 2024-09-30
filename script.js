// script.js

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");
  const configButton = document.querySelector(".config-button");
  const configContent = document.getElementById("config");

  tabLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();

          // Oculta todas as seções
          tabContents.forEach(content => {
              content.style.display = "none";
          });

          // Mostra a seção correspondente ao botão clicado
          const tabId = this.getAttribute("data-tab");
          const activeTab = document.getElementById(tabId);
          if (activeTab) {
              activeTab.style.display = "block";
          }
      });
  });

  // Função para mostrar a seção de configuração
  configButton.addEventListener("click", function () {
      // Oculta todas as seções
      tabContents.forEach(content => {
          content.style.display = "none";
      });

      // Mostra a seção de configuração
      configContent.style.display = "block";
  });

  // Salvar configurações (pode ser expandido conforme necessidade)
  document.querySelector('.config-section form').addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Configurações salvas com sucesso!');
  });
});
