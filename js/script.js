function enviarWhats(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5518988073916';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModal");

    // Cards de projetos
    const projectCards = document.querySelectorAll(".projetos-card");

    // Evento de clique nos cards
    projectCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Alterando conteúdo do modal conforme o projeto
            const title = card.querySelector(".info-projetos").textContent;
            const description = card.querySelector(".paragrafo-projeos").textContent;
            
            // Adicionando mais informações para o modal
            let additionalInfo = "";
            switch (title) {
                case "Calculadora":
                    additionalInfo = "Este projeto é uma calculadora com tema dark-mode e possui funcionalidades como cálculo de operações básicas e complexas. Além disso, nesse projeto as tecnologias usadas foram HTML, CSS e JavaScript";
                    break;
                case "Sistema de Login":
                    additionalInfo = "Este sistema de login utiliza autenticação via banco de dados, garantindo segurança, um design bonito e interativo. Além disso, nesse projeto as tecnologias usadas foram PHP, CSS, JavaScript e MYSQL";
                    break;
                case "Landing Page":
                    additionalInfo = "A landing page foi desenvolvida como parte de um tutorial online, com foco em design limpo e funcionalidades. Além disso, nesse projeto as tecnologias usadas foram HTML, CSS e JavaScript";
                    break;
                default:
                    additionalInfo = "Mais informações sobre este projeto em breve!";
            }

            // Atualizando os campos do modal
            document.getElementById("modalTitle").textContent = title;
            document.getElementById("modalDescription").textContent = description;
            document.getElementById("modalAdditionalInfo").textContent = additionalInfo;

            // Exibindo o modal
            modal.style.display = "flex";
        });
    });

    // Fechar o modal quando clicar no "X"
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar o modal quando clicar fora do conteúdo
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});