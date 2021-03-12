'use strict';
const mainNav = document.querySelector(`.main-nav`);
const mainNavClose = mainNav.querySelector(`.main-nav__close`);
const burgerButton = document.querySelector(`.mobile-header__button`);

mainNav.classList.remove(`main-nav_no-js`);
mainNavClose.classList.remove(`main-nav__close_no-js`);
burgerButton.classList.remove(`mobile-header__button_no-js`);

const closeMenu = function () {
  mainNav.classList.remove(`main-nav_open`)
  mainNavClose.removeEventListener(`click`, closeMenu)
};

const openMenu = function () {
  if (!mainNav.classList.contains(`main-nav_open`)) {
    mainNav.classList.add(`main-nav_open`)
    mainNavClose.addEventListener(`click`, closeMenu)
  }
};

burgerButton.addEventListener(`click`, openMenu);
