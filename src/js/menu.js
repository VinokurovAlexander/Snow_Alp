var openBtn = document.querySelector('.main-nav__menu-btn');
var closeBtn = document.querySelector('.main-menu__close-btn');
var menu = document.querySelector('.page-header__menu-wrapper');

var openMenuBtnHandler = function () {
  menu.classList.toggle('main-menu--show');
};
var closeMenuBtnHandler = function () {
  if (menu.classList.contains('main-menu--show')) {
    menu.classList.remove('main-menu--show');
  }
};

openBtn.addEventListener('click', openMenuBtnHandler);
closeBtn.addEventListener('click', closeMenuBtnHandler);
