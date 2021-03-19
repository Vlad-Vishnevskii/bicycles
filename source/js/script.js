'use strict';
(function () {

  var mainNav = document.querySelector('.main-nav');
  var closeButton = document.querySelector('.main-nav__close-btn');
  var burgerButton = document.querySelector('.mobile-top__button');

  var closeMenu = function () {
    mainNav.classList.remove('main-nav_open');
    closeButton.removeEventListener('click', closeMenu);
  };

  var openMenu = function () {
    if (!mainNav.classList.contains('main-nav_open')) {
      mainNav.classList.add('main-nav_open');
      closeButton.addEventListener('click', closeMenu);
    }
  };

  if (mainNav && closeButton && burgerButton) {
    mainNav.classList.remove('main-nav_no-js');
    closeButton.classList.remove('main-nav__close-btn_no-js');
    burgerButton.classList.remove('mobile-top__button_no-js');
    burgerButton.addEventListener('click', openMenu);
  }

})();
