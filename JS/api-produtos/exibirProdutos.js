import initModalProdutos from "../modules/modal/modal-produtos.js";

export default function exibirOsProdutosNaTela(listaDeProdutos) {
  const elementoParaInserirProdutos = document.querySelector(".container-produtos");
  elementoParaInserirProdutos.innerHTML = '';

  listaDeProdutos.forEach((produto) => {
    const cardClass = `produto-card${produto.id}`;
    const precoFormatado = produto.preco ? produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Preço não definido';

    const cardProduto = document.createElement('div');
    cardProduto.classList.add('cards-produtos', cardClass);
    cardProduto.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <span>${precoFormatado}</span>
      <button class="open">Ver mais</button>
    `;
    elementoParaInserirProdutos.appendChild(cardProduto);
  });

  initModalProdutos();
}
