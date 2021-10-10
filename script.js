const sidebarMenu = document.querySelector('.menu');
const headerMenu = sidebarMenu.querySelector('.menu-header');
const menuLogo = headerMenu.querySelector('.menu-header__logo');
const menuToggle = headerMenu.querySelector('.menu-header__toggle');

const navSidebarMenu = sidebarMenu.querySelector('.menu-nav');
const linksNav = navSidebarMenu.querySelectorAll('.menu-nav__link');

const closeMenu = () => {
  sidebarMenu.classList.add('menu--closed');
  menuLogo.classList.add('menu-header__logo--closed');
  linksNav.forEach((link) => link.classList.add('menu-nav__link--closed'));
}

const openMenu = () => {
  sidebarMenu.classList.remove('menu--closed');
  menuLogo.classList.remove('menu-header__logo--closed');
  linksNav.forEach((link) => link.classList.remove('menu-nav__link--closed'));
}

const toggleMenu = () => {
  if (sidebarMenu.classList.contains('menu--closed')) {
    openMenu();
  } else {
    closeMenu();
  }

  // if (menuLogo.classList.contains('visually-hidden')) {
  //   menuLogo.classList.remove('visually-hidden')
  // } else {
  //   menuLogo.classList.add('visually-hidden');
  // }
};

menuToggle.addEventListener('click', toggleMenu);

