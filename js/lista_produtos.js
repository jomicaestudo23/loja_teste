const produtos = [
    {
      id_produto: 1,
      descricao_produto: "Arroz Branco Tipo 1 5kg",
      valor_unitario: 28.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/arroz-branco-5kg.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 2,
      descricao_produto: "Feijão Carioca 1kg",
      valor_unitario: 8.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/feijao-carioca-1kg.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 3,
      descricao_produto: "Macarrão Espaguete 500g",
      valor_unitario: 4.29,
      unidade: "UN",
      caminho_imagem: "img/produtos/macarrao-espaguete-500g.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 4,
      descricao_produto: "Óleo de Soja 900ml",
      valor_unitario: 7.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/oleo-soja-900ml.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 5,
      descricao_produto: "Açúcar Refinado 1kg",
      valor_unitario: 5.19,
      unidade: "UN",
      caminho_imagem: "img/produtos/acucar-refinado-1kg.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 6,
      descricao_produto: "Sal Refinado 1kg",
      valor_unitario: 2.79,
      unidade: "UN",
      caminho_imagem: "img/produtos/sal-refinado-1kg.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 7,
      descricao_produto: "Café Torrado e Moído 500g",
      valor_unitario: 18.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/cafe-500g.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 8,
      descricao_produto: "Leite Integral 1L",
      valor_unitario: 5.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/leite-integral-1l.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 9,
      descricao_produto: "Queijo Mussarela 500g",
      valor_unitario: 22.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/mussarela-500g.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 10,
      descricao_produto: "Presunto Cozido 500g",
      valor_unitario: 19.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/presunto-500g.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 11,
      descricao_produto: "Iogurte Natural 170g",
      valor_unitario: 3.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/iogurte-natural.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 12,
      descricao_produto: "Manteiga com Sal 200g",
      valor_unitario: 9.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/manteiga-200g.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 13,
      descricao_produto: "Peito de Frango kg",
      valor_unitario: 18.90,
      unidade: "KG",
      caminho_imagem: "img/produtos/peito-frango.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 14,
      descricao_produto: "Carne Bovina Patinho kg",
      valor_unitario: 42.90,
      unidade: "KG",
      caminho_imagem: "img/produtos/patinho.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 15,
      descricao_produto: "Linguiça Toscana kg",
      valor_unitario: 21.90,
      unidade: "KG",
      caminho_imagem: "img/produtos/linguica-toscana.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 16,
      descricao_produto: "Filé de Tilápia 800g",
      valor_unitario: 39.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/file-tilapia.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 17,
      descricao_produto: "Alface Crespa",
      valor_unitario: 3.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/alface.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 18,
      descricao_produto: "Tomate kg",
      valor_unitario: 8.90,
      unidade: "KG",
      caminho_imagem: "img/produtos/tomate.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 19,
      descricao_produto: "Batata Inglesa kg",
      valor_unitario: 6.99,
      unidade: "KG",
      caminho_imagem: "img/produtos/batata.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 20,
      descricao_produto: "Banana Prata kg",
      valor_unitario: 7.49,
      unidade: "KG",
      caminho_imagem: "img/produtos/banana-prata.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 21,
      descricao_produto: "Maçã Gala kg",
      valor_unitario: 9.90,
      unidade: "KG",
      caminho_imagem: "img/produtos/maca-gala.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 22,
      descricao_produto: "Laranja Pera kg",
      valor_unitario: 5.99,
      unidade: "KG",
      caminho_imagem: "img/produtos/laranja.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 23,
      descricao_produto: "Refrigerante Cola 2L",
      valor_unitario: 9.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/refrigerante-cola-2l.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 24,
      descricao_produto: "Suco de Laranja 1L",
      valor_unitario: 8.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/suco-laranja-1l.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 25,
      descricao_produto: "Água Mineral 1,5L",
      valor_unitario: 3.29,
      unidade: "UN",
      caminho_imagem: "img/produtos/agua-mineral.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 26,
      descricao_produto: "Achocolatado em Pó 400g",
      valor_unitario: 7.89,
      unidade: "UN",
      caminho_imagem: "img/produtos/achocolatado.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 27,
      descricao_produto: "Sabão em Pó 1kg",
      valor_unitario: 16.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/sabao-po.jpg",
      id_secao: 6,
      secao: "Limpeza"
    },
    {
      id_produto: 28,
      descricao_produto: "Detergente Líquido 500ml",
      valor_unitario: 2.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/detergente.jpg",
      id_secao: 6,
      secao: "Limpeza"
    },
    {
      id_produto: 29,
      descricao_produto: "Água Sanitária 2L",
      valor_unitario: 6.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/agua-sanitaria.jpg",
      id_secao: 6,
      secao: "Limpeza"
    },
    {
      id_produto: 30,
      descricao_produto: "Desinfetante 2L",
      valor_unitario: 8.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/desinfetante.jpg",
      id_secao: 6,
      secao: "Limpeza"
    },
    {
      id_produto: 31,
      descricao_produto: "Papel Higiênico 12 Rolos",
      valor_unitario: 24.90,
      unidade: "PCT",
      caminho_imagem: "img/produtos/papel-higienico.jpg",
      id_secao: 6,
      secao: "Limpeza"
    },
    {
      id_produto: 32,
      descricao_produto: "Shampoo 350ml",
      valor_unitario: 15.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/shampoo.jpg",
      id_secao: 7,
      secao: "Higiene"
    },
    {
      id_produto: 33,
      descricao_produto: "Condicionador 350ml",
      valor_unitario: 16.90,
      unidade: "UN",
      caminho_imagem: "img/produtos/condicionador.jpg",
      id_secao: 7,
      secao: "Higiene"
    },
    {
      id_produto: 34,
      descricao_produto: "Sabonete 90g",
      valor_unitario: 2.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/sabonete.jpg",
      id_secao: 7,
      secao: "Higiene"
    },
    {
      id_produto: 35,
      descricao_produto: "Creme Dental 90g",
      valor_unitario: 5.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/creme-dental.jpg",
      id_secao: 7,
      secao: "Higiene"
    },
    {
      id_produto: 36,
      descricao_produto: "Escova Dental Macia",
      valor_unitario: 7.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/escova-dental.jpg",
      id_secao: 7,
      secao: "Higiene"
    },
    {
      id_produto: 37,
      descricao_produto: "Biscoito Recheado Chocolate 140g",
      valor_unitario: 3.99,
      unidade: "UN",
      caminho_imagem: "img/produtos/biscoito-chocolate.jpg",
      id_secao: 8,
      secao: "Bomboniere"
    },
    {
      id_produto: 38,
      descricao_produto: "Chocolate ao Leite 90g",
      valor_unitario: 6.49,
      unidade: "UN",
      caminho_imagem: "img/produtos/chocolate-90g.jpg",
      id_secao: 8,
      secao: "Bomboniere"
    },
    {
      id_produto: 39,
      descricao_produto: "Balas Sortidas 600g",
      valor_unitario: 12.90,
      unidade: "PCT",
      caminho_imagem: "img/produtos/balas-sortidas.jpg",
      id_secao: 8,
      secao: "Bomboniere"
    },
    {
      id_produto: 40,
      descricao_produto: "Amendoim Torrado 500g",
      valor_unitario: 11.90,
      unidade: "PCT",
      caminho_imagem: "img/produtos/amendoim-torrado.jpg",
      id_secao: 8,
      secao: "Bomboniere"
    }
  ];
  export{produtos}