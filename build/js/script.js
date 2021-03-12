'use strict';
var mainNav = document.querySelector('.main-nav');
var mainNavClose = mainNav.querySelector('.main-nav__close');
var burgerButton = document.querySelector('.mobile-top__button');

mainNav.classList.remove('main-nav_no-js');
mainNavClose.classList.remove('main-nav__close_no-js');
burgerButton.classList.remove('mobile-top__button_no-js');

var closeMenu = function () {
  mainNav.classList.remove('main-nav_open');
  mainNavClose.removeEventListener('click', closeMenu);
};

var openMenu = function () {
  if (!mainNav.classList.contains('main-nav_open')) {
    mainNav.classList.add('main-nav_open');
    mainNavClose.addEventListener('click', closeMenu);
  }
};

burgerButton.addEventListener('click', openMenu);
