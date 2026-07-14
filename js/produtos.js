// importando os produtos
import { produtos } from "./lista_produtos.js";
// imporando o carrinho

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

const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt) => {
    //Pegando o valor do input e converendo em minúsculos
    let txtInput = evt.target.value.toLowerCase()

    //Filtrando os cards a partir do filter e includes
    montaCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))
})

const montaCards2 = (objProduto) => {
    //Limpando o section cards
    sectionCards.innerHTML = ''

    //Pecorrendo o array de produtos
    objProduto.forEach((elem, i) => {
        //Criando o elemento div e definindo o atributo card
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        //Criando o elemento img e definindo os atributos sc e alt os valores do caminho das imagens e a descrição dos produtos
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        //Criando o elemento p e atribuido a descrição dos produtos
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        //Criadno o elemento h2 e atribuindo o valor unitário deixando em duas casas decimais e substituindo ponto por vírgulo
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        //Criando o elemento button e definindo os atributos class e a descrição adicionar
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', () => {
            addItem(elem)
            window.location.href = '../paginas/carrinho.html'
        })

        //Adicionando os elementos filhos aos divCard
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        //Adicionando o divCard a section cards
        sectionCards.appendChild(divCard)
    })
}