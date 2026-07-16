// Importa as funções responsáveis por listar e remover itens do carrinho
import { listItens, removeItem } from "./carrinho.js";


// ======================================================
// Atualiza o resumo da compra
// ======================================================
const atualizarCarrinho = (itens) => {

    // Captura os elementos do resumo
    const pValorProdutos = document.querySelector("#valor-produtos");
    const pValorFrete = document.querySelector("#valor-frete");
    const pValorTotal = document.querySelector("#valor-total");

    // Variáveis utilizadas nos cálculos
    let totalProdutos = 0;
    let frete = 1;
    let totalCompra = 0;

    // Verifica se existem produtos
    if (itens.length == 0) {

        frete = 0;

    } else {

        // Soma o subtotal de cada produto
        itens.forEach((item) => {

            totalProdutos +=
                item.valor_unitario * item.quantidade;

        });

    }

    // Calcula o valor final
    totalCompra = totalProdutos + frete;

    // Atualiza os valores na tela
    pValorProdutos.textContent =
        `R$ ${totalProdutos.toFixed(2).replace(".", ",")}`;

    pValorFrete.textContent =
        `R$ ${frete.toFixed(2).replace(".", ",")}`;

    pValorTotal.textContent =
        `R$ ${totalCompra.toFixed(2).replace(".", ",")}`;

};



// ======================================================
// Monta a tela do carrinho
// ======================================================
const montaTelaCarrinho = (objListaItens) => {

    // Local onde os produtos serão exibidos
    const sectionItensCarrinho =
        document.querySelector("#itens-carrinho");

    // Limpa a tela
    sectionItensCarrinho.innerHTML = "";



    // Verifica se o carrinho está vazio
    if (objListaItens.length === 0) {

        sectionItensCarrinho.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

        atualizarCarrinho([]);

        return;

    }



    // Percorre todos os produtos
    objListaItens.forEach((elem, i) => {

        // =============================
        // Card do produto
        // =============================
        const sectionItem =
            document.createElement("section");

        sectionItem.className = "produto";



        // =============================
        // Imagem
        // =============================
        const divImgItem =
            document.createElement("div");

        divImgItem.className = "img-item";

        const imgItem =
            document.createElement("img");

        imgItem.src = elem.caminho_imagem;
        imgItem.alt = elem.descricao_produto;

        divImgItem.appendChild(imgItem);



        // =============================
        // Descrição
        // =============================
        const divDescricaoItens =
            document.createElement("div");

        divDescricaoItens.className =
            "descricoes-itens";

        const h3 =
            document.createElement("h3");

        h3.textContent =
            elem.descricao_produto;

        divDescricaoItens.appendChild(h3);



        // =============================
        // Área dos valores
        // =============================
        const divValores =
            document.createElement("div");

        divValores.className = "valores";



        // Preço unitário
        const pItem =
            document.createElement("p");

        pItem.textContent =
            `Preço: R$ ${parseFloat(elem.valor_unitario)
                .toFixed(2)
                .replace(".", ",")}`;



        // =============================
        // Quantidade
        // =============================
        const divQuant =
            document.createElement("div");

        divQuant.className =
            "input-quantidade";

        const inputQuantidade =
            document.createElement("input");

        inputQuantidade.type = "number";
        inputQuantidade.className = "input-item";
        inputQuantidade.min = "1";
        inputQuantidade.value = elem.quantidade;

        divQuant.appendChild(inputQuantidade);



        // =============================
        // Total do produto
        // =============================
        const pTotal =
            document.createElement("p");



        // Atualiza o subtotal do item
        const atualizaTotal = () => {

            // Atualiza a quantidade
            elem.quantidade =
                Number(inputQuantidade.value);

            // Calcula o subtotal
            const total =
                elem.valor_unitario *
                elem.quantidade;

            // Atualiza o subtotal
            pTotal.textContent =
                `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

            // Atualiza o resumo
            atualizarCarrinho(objListaItens);

        };

        // Calcula o subtotal inicial
        atualizaTotal();

        // Sempre que a quantidade mudar
        inputQuantidade.addEventListener(
            "input",
            atualizaTotal
        );



        // =============================
        // Botão remover
        // =============================
        const btnRemover =
            document.createElement("button");

        btnRemover.className = "remover";

        btnRemover.textContent = "Remover";

        btnRemover.addEventListener("click", () => {

            removeItem(i);

            montaTelaCarrinho(listItens());

        });



        // =============================
        // Montagem do card
        // =============================

        divValores.appendChild(pItem);
        divValores.appendChild(divQuant);
        divValores.appendChild(pTotal);
        divValores.appendChild(btnRemover);

        sectionItem.appendChild(divImgItem);
        sectionItem.appendChild(divDescricaoItens);
        sectionItem.appendChild(divValores);

        sectionItensCarrinho.appendChild(sectionItem);

    });



    // Atualiza o resumo da compra
    atualizarCarrinho(objListaItens);

};



// ======================================================
// Início do programa
// ======================================================

// Carrega todos os itens do carrinho
montaTelaCarrinho(listItens());