'use strict';

window.onscroll = function showNav() {
  var nav = document.querySelector('.main-nav');
  var header = document.querySelector('.page-header');
  var menu = document.querySelector('.main-menu');

  if (window.pageYOffset > 50) {
    nav.classList.add('main-nav--fixed');
    header.classList.add('page-header--scroll');
  } else {
    nav.classList.remove('main-nav--fixed');
    header.classList.remove('page-header--scroll');
  }
}
