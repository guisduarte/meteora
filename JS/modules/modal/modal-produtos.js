export default function initModalProdutos() {
  const modalProdutos = document.querySelector("#modal-produtos");
  const openModalBtns = document.querySelectorAll(".open");
  const closeModalProdutos = document.querySelector(".close");
  const itemModal = document.querySelectorAll(".modal__item");

  // Abrir a modal Produtos.
  openModalBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    if (!modalProdutos.hasAttribute('open')) {
          modalProdutos.showModal();
    }
    // Rola o conteúdo para o topo
    modalProdutos.querySelector('.modal__cabecalho').scrollIntoView({block: 'start' });
    
    itemModal.forEach(texto => {
      texto.style.display = "none";
    });
    itemModal[i].style.display = "block";
    
    });

  });

  // Fechar modal Produtos.
  closeModalProdutos.addEventListener("click", () => modalProdutos.close()); 

}
