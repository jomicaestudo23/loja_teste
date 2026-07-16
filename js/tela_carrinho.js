// Importa as funções responsáveis por listar os itens do carrinho
// e remover um item específico.
import { listItens, removeItem } from "./carrinho.js";


// FUNÇÃO RESPONSÁVEL POR ATUALIZAR O RESUMO DA COMPRA
// (Valor dos Produtos, Frete e Total a Pagar)
const atualizarCarrinho = (itens) => {

    // Captura os elementos do HTML onde os valores serão exibidos
    const pValorProdutos = document.querySelector("#valor-produtos");
    const pValorFrete = document.querySelector("#valor-frete");
    const pValorTotal = document.querySelector("#valor-total");

    // Variáveis utilizadas para realizar os cálculos
    let totalProdutos = 0;
    let frete = 1;
    let totalCompra = 0;

    // Verifica se existem produtos no carrinho
    if (itens.length == 0) {

        // Se não existir nenhum produto,
        // também não será cobrado frete.
        frete = 0;

    } else {

        // Percorre todos os produtos do carrinho
        itens.forEach((item) => {

            // Soma o subtotal de cada produto
            // subtotal = preço × quantidade
            totalProdutos += item.valor_unitario * item.quantidade;

        });

    }

    // Calcula o valor final da compra
    totalCompra = totalProdutos + frete;

    // Atualiza o HTML com os valores calculados
    pValorProdutos.textContent =
        `R$ ${totalProdutos.toFixed(2).replace(".", ",")}`;

    pValorFrete.textContent =
        `R$ ${frete.toFixed(2).replace(".", ",")}`;

    pValorTotal.textContent =
        `R$ ${totalCompra.toFixed(2).replace(".", ",")}`;
};



// FUNÇÃO RESPONSÁVEL POR MONTAR A TELA DO CARRINHO
const montaTelaCarrinho = (objListaItens) => {

    // Captura a seção onde os produtos serão exibidos
    const sectionItensCarrinho =
        document.querySelector("#itens-carrinho");

    // Limpa os produtos existentes antes de montar novamente
    sectionItensCarrinho.innerHTML = "";



    // VERIFICA SE O CARRINHO ESTÁ VAZIO
    if (objListaItens.length === 0) {

        sectionItensCarrinho.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

        // Atualiza o resumo da compra mostrando todos os valores zerados
        atualizarCarrinho([]);

        // Encerra a função
        return;
    }



    // PERCORRE TODOS OS PRODUTOS DO CARRINHO
    objListaItens.forEach((elem, i) => {


        // CRIA A ESTRUTURA PRINCIPAL DO CARD

        const sectionItem = document.createElement("section");
        sectionItem.className = "produto";




        // IMAGEM DO PRODUTO

        const divImgItem = document.createElement("div");
        divImgItem.className = "img-item";

        const imgItem = document.createElement("img");

        // Define a imagem e o texto alternativo
        imgItem.src = elem.caminho_imagem;
        imgItem.alt = elem.descricao_produto;

        divImgItem.appendChild(imgItem);




        // DESCRIÇÃO DO PRODUTO

        const divDescricaoItens =
            document.createElement("div");

        divDescricaoItens.className =
            "descricoes-itens";

        const h3 = document.createElement("h3");

        h3.textContent = elem.descricao_produto;

        divDescricaoItens.appendChild(h3);




        // ÁREA DOS VALORES

        const divValores =
            document.createElement("div");

        divValores.className = "valores";




        // PREÇO UNITÁRIO

        const pItem = document.createElement("p");

        pItem.textContent =
            `Preço: R$ ${parseFloat(elem.valor_unitario)
                .toFixed(2)
                .replace(".", ",")}`;




        // CAMPO DE QUANTIDADE

        const divQuant =
            document.createElement("div");

        divQuant.className = "input-quantidade";

        const inputQuantidade =
            document.createElement("input");

        inputQuantidade.type = "number";

        inputQuantidade.className = "input-item";

        // Impede quantidade menor que 1
        inputQuantidade.min = "1";

        // Exibe a quantidade atual do produto
        inputQuantidade.value = elem.quantidade;

        divQuant.appendChild(inputQuantidade);




        // TOTAL DO ITEM

        const pTotal = document.createElement("p");



        // FUNÇÃO RESPONSÁVEL POR CALCULAR O TOTAL DO ITEM
        const atualizaTotal = () => {

            // Atualiza a quantidade digitada pelo usuário
            elem.quantidade =
                Number(inputQuantidade.value);

            // Calcula o subtotal do produto
            const total =
                elem.valor_unitario *
                elem.quantidade;

            // Atualiza o subtotal na tela
            pTotal.textContent =
                `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

            // Atualiza também o resumo da compra
            atualizarCarrinho(objListaItens);

        };



        // Calcula o subtotal quando o card é criado
        atualizaTotal();



        // Sempre que o usuário alterar a quantidade,
        // o subtotal e o resumo serão recalculados.
        inputQuantidade.addEventListener(
            "input",
            atualizaTotal
        );




        // BOTÃO REMOVER

        const btnRemover =
            document.createElement("button");

        btnRemover.className = "remover";

        btnRemover.textContent = "Remover";



        // Remove o produto do carrinho
        btnRemover.addEventListener("click", () => {

            // Remove o item utilizando seu índice
            removeItem(i);

            // Recria toda a tela do carrinho
            montaTelaCarrinho(listItens());

        });




        // MONTA O CARD COMPLETO


        // Adiciona os elementos dentro da área de valores
        divValores.appendChild(pItem);
        divValores.appendChild(divQuant);
        divValores.appendChild(pTotal);
        divValores.appendChild(btnRemover);

        // Adiciona imagem, descrição e valores ao card
        sectionItem.appendChild(divImgItem);
        sectionItem.appendChild(divDescricaoItens);
        sectionItem.appendChild(divValores);

        // Adiciona o card completo ao HTML
        sectionItensCarrinho.appendChild(sectionItem);

    });



    // Depois que todos os cards foram criados,
    // atualiza o resumo da compra.
    atualizarCarrinho(objListaItens);

};



// INÍCIO DO PROGRAMA

// Obtém todos os produtos armazenados no carrinho
// e monta a tela automaticamente.
montaTelaCarrinho(listItens());