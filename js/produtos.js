// importando os produtos
import { produtos } from "./lista_produtos.js";
// imporando o carrinho
import { addItem } from "./carrinho.js";
// pegando elementos do DOM
const sectionCards = document.querySelector("#cards");

// =======================================
// Função responsável por montar os cards
// =======================================
const montaCards = (listaProdutos) => {

    // Limpa os cards existentes
    sectionCards.innerHTML = "";

    // Percorre apenas a lista recebida
    listaProdutos.forEach((elem) => {

        // Card
        const divCards = document.createElement("div");
        divCards.className = "card";

        // Imagem
        const imgCard = document.createElement("img");
        imgCard.src = elem.caminho_imagem;
        imgCard.alt = elem.descricao_produto;

        // Descrição
        const pCard = document.createElement("p");
        pCard.textContent = elem.descricao_produto;

        // Preço
        const h2Card = document.createElement("h2");
        h2Card.textContent = `R$ ${parseFloat(elem.valor_unitario)
            .toFixed(2)
            .replace(".", ",")}`;

        // Botão
        const btnCard = document.createElement("button");
        btnCard.className = "btn-add";
        btnCard.textContent = "Adicionar";

        // Montagem do card
        divCards.appendChild(imgCard);
        divCards.appendChild(pCard);
        divCards.appendChild(h2Card);
        divCards.appendChild(btnCard);

        // Adiciona o card na página
        sectionCards.appendChild(divCards);
    });

};

// =======================================
// Carrega todos os produtos
// =======================================
const listarProdutos = () => {
    montaCards(produtos);
};

// =======================================
// Cria as seções sem repetição
// =======================================
const menuSecoes = () => {

    const mapSecoes = new Map();

    produtos.forEach((produto) => {
        mapSecoes.set(produto.id_secao, produto);
    });

    return Array.from(mapSecoes.values());
};

// =======================================
// Cria o menu de seções
// =======================================
const carregaSecoes = () => {

    const ulMenuSecoes = document.querySelector("#menu-secoes");

    ulMenuSecoes.innerHTML = "";

    menuSecoes().forEach((secao) => {

        const liMenu = document.createElement("li");

        const aMenu = document.createElement("a");

        aMenu.href = "#";
        aMenu.className = "lnk-secao";
        aMenu.textContent = secao.secao;

        aMenu.addEventListener("click", (event) => {

            event.preventDefault();

            montaCards(filtroProduto(secao.id_secao));

        });

        liMenu.appendChild(aMenu);
        ulMenuSecoes.appendChild(liMenu);

    });

};

const filtroProduto = (idSecao) => {

    return produtos.filter(
        produto => produto.id_secao === idSecao
    );

};

listarProdutos();
carregaSecoes();