import initModalNewsLetter from "./modal/modal-news-letter.js";

const btnAbrirNewsLetter = document.querySelector(".open-news");

function validaEmail() {
  const campoEmail = document.querySelector("#email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const textoErro = document.getElementById('texto-erro');

  if(campoEmail === "") {
    textoErro.innerHTML =  "O campo de e-mail não pode estar vazio."  

  } else if(!emailRegex.test(campoEmail)) {
    textoErro.innerHTML =  "Por favor, preencha um e-mail válido."
    
  } else {
     initModalNewsLetter();
  }
}

btnAbrirNewsLetter.addEventListener("click", validaEmail);
