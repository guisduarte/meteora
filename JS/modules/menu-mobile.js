export default function menuMobile(){    
   const menuBotao = document.querySelector('[data-menu="button"]');
   const menulist = document.querySelector('[data-menu="list');

   function toggleMenu() {
        menulist.classList.toggle('active');
        menuBotao.classList.toggle('active');       
    }
    menuBotao.addEventListener('click', toggleMenu);
}
