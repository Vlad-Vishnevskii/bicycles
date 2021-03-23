'use strict';
(function () {

  var mainNav = document.querySelector('.main-nav');
  var closeButton = document.querySelector('.main-nav__close-btn');
  var burgerButton = document.querySelector('.mobile-top__button');
  var body = document.querySelector('body');

  var closeMenu = function () {
    mainNav.classList.remove('main-nav_open');
    closeButton.removeEventListener('click', closeMenu);
    body.classList.remove('disable-scrolling-js');
  };

  var openMenu = function () {
    if (!mainNav.classList.contains('main-nav_open')) {
      mainNav.classList.add('main-nav_open');
      closeButton.addEventListener('click', closeMenu);
      body.classList.add('disable-scrolling-js');
    }
  };

  if (mainNav && closeButton && burgerButton) {
    mainNav.classList.remove('main-nav_no-js');
    closeButton.classList.remove('main-nav__close-btn_no-js');
    burgerButton.classList.remove('mobile-top__button_no-js');
    burgerButton.addEventListener('click', openMenu);
  }

})();
