const body = document.querySelector('body');
const openMenu = body.querySelector('.main-nav__button--open');
const closeMenu = body.querySelector('.main-nav__button--close')
const mainNav = body.querySelector('.main-nav__menu');

openMenu.onclick = () => {
  mainNav.classList.add('main-nav__menu--open');
  body.style.overflow = 'hidden';
};

closeMenu.onclick = () => {
  mainNav.classList.remove('main-nav__menu--open');
  body.removeAttribute('style');
};

