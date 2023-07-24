import exibirOsProdutosNaTela from "./exibirProdutos.js";
import conectaBuscaProduto from "./mainApi.js";

async function pesquisarProduto(evento) {
  evento.preventDefault();

  const textoCampoBuscar = document.querySelector('[data-menu="buscar-texto"]').value;  
  const busca = await conectaBuscaProduto(textoCampoBuscar);

  exibirOsProdutosNaTela(busca);

}

const botaoBuscar = document.querySelector('[data-menu="buscar-btn"]');
botaoBuscar.addEventListener("click", evento => pesquisarProduto(evento));
