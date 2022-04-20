const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header-nav');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    nav.classList.add('toggle-nav');
    menuBtn.src = '/assets/images/icon-close.svg';
    showMenu = true;
  } else {
    nav.classList.remove('toggle-nav');
    menuBtn.src = '/assets/images/icon-hamburger.svg';
    showMenu = false;
  }
}


menuBtn.addEventListener('click', toggleMenu);
