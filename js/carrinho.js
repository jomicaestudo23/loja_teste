// função intem
const item = (objProduto)=>{
    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto:objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade: 1 ,
    }
    return item
}

// Adiciona um único item ao carrinho
const addItem = (objItem) => {
    const itensCarrinho = [objItem];

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

// Lista os itens
const listItens = () => {
    return JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];
};

// Remove o item
const removeItem = (indice) => {
    const itensCarrinho = listItens();

    itensCarrinho.splice(indice, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

export { addItem, listItens, removeItem };