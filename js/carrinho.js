// Cria o objeto do item do carrinho
const item = (objProduto) => ({
    id_produto: objProduto.id_produto,
    descricao_produto: objProduto.descricao_produto,
    valor_unitario: objProduto.valor_unitario,
    unidade: objProduto.unidade,
    caminho_imagem: objProduto.caminho_imagem,
    quantidade: 1
});

// Lista os itens
const listItens = () => {
    return JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];
};

// Adiciona item
const addItem = (objProduto) => {

    const itensCarrinho = listItens();
    const novoItem = item(objProduto);

    const itemExistente = itensCarrinho.find(
        i => i.id_produto === novoItem.id_produto
    );

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        itensCarrinho.push(novoItem);
    }

    sessionStorage.setItem(
         "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

// Remove item
const removeItem = (indice) => {
    const itensCarrinho = listItens();

    itensCarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

export { addItem, listItens, removeItem };