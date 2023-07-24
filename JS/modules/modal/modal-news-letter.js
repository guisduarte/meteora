export default function initModalNewsLetter () {
  const modalNews = document.querySelector("#modal-news-letter");
  const openNewsLetter = document.querySelector(".open-news");
  const closeModalNews = document.querySelector(".close-news");

  openNewsLetter.addEventListener('click', () => {
      if (!modalNews.hasAttribute('open')) {
          modalNews.showModal();
      }
  }); 

  closeModalNews.addEventListener("click", () => modalNews.close());

}