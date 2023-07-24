import exibirOsProdutosNaTela from "./exibirProdutos.js";
import { produtos } from "./mainApi.js";

const filtrarCategorias = document.querySelectorAll(".cards");  

function filtrarProdutos() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.innerText;
  
  const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
  
  exibirOsProdutosNaTela(produtosFiltrados);
} 

filtrarCategorias.forEach(btn => btn.addEventListener('click', filtrarProdutos));
