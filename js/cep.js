const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const estado = document.querySelector("#estado");

cep.addEventListener("blur", buscarCEP);

async function buscarCEP() {

    // Remove qualquer caractere que não seja número
    const valorCep = cep.value.replace(/\D/g, "");

    // Verifica se possui 8 dígitos
    if (valorCep.length !== 8) {
        alert("CEP inválido.");
        return;
    }

    try {

        const resposta = await fetch(
            `https://viacep.com.br/ws/${valorCep}/json/`
        );

        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        endereco.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;

    } catch (erro) {

        alert("Erro ao consultar o CEP.");
        console.error(erro);

    }

}