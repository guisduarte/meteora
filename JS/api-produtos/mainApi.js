import exibirOsProdutosNaTela from "./exibirProdutos.js";

export let produtos = [];

const endpointDaAPI = 'https://api-meteora.vercel.app/produtos';

async function getBuscarProdutosDaAPI() {
  const res = await fetch(endpointDaAPI);
  produtos = await res.json();
  
  exibirOsProdutosNaTela(produtos);

}

getBuscarProdutosDaAPI();

export default async function conectaBuscaProduto(termoDeBusca) {
  const conexao = await fetch(`https://api-meteora.vercel.app/produtos?q=${termoDeBusca}`);
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida
}
