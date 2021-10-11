const sidebarMenu = document.querySelector('.menu');
const headerMenu = sidebarMenu.querySelector('.menu-header');
const menuLogo = headerMenu.querySelector('.menu-header__logo');
const menuToggle = headerMenu.querySelector('.menu-header__toggle');

const navSidebarMenu = sidebarMenu.querySelector('.menu-nav');
const itemsNav = navSidebarMenu.querySelectorAll('.menu-nav__item');
const linksNav = navSidebarMenu.querySelectorAll('.menu-nav__link');
const countInbox = navSidebarMenu.querySelector('.menu-nav__count');
const spotInbox = navSidebarMenu.querySelector('.menu-nav__spot');

const menuProject = sidebarMenu.querySelector('.menu-projects');
const listProject = menuProject.querySelector('.menu-projects__list');
const headingProject = menuProject.querySelector('.menu-projects__heading');

const buttonNewProject = sidebarMenu.querySelector('.new-project__button');
const signNewProject = buttonNewProject.querySelector('.new-project__sign');

const footerMenu = sidebarMenu.querySelector('.menu-footer');
const avatarMenuFooter = footerMenu.querySelector('.menu-footer__avatar');
const authorFooterMenu = footerMenu.querySelector('.menu-footer__author');
const buttonFooterMenu = footerMenu.querySelector('.menu-footer__button');

const closeMenu = () => {
  sidebarMenu.classList.add('menu--closed');
  menuLogo.classList.add('menu-header__logo--closed');
  linksNav.forEach((link) => link.classList.add('menu-nav__link--closed'));
  countInbox.classList.add('menu-nav__count--closed');
  spotInbox.classList.remove('visually-hidden');
  itemsNav.forEach((item) => {
    item.style.paddingRight = '8px';
    item.style.paddingLeft = '8px';
    item.style.marginLeft = '8px';
    item.style.width = '36px';
  });
  listProject.classList.add('menu-projects__list--closed');
  headingProject.classList.add('menu-projects__heading--closed');
  menuProject.style.marginBottom = '300px';

  buttonNewProject.style.fontSize = '0px';
  buttonNewProject.style.marginLeft = '33px';
  buttonNewProject.style.paddingLeft = '0px';
  buttonNewProject.style.paddingRight = '0px';
  buttonNewProject.style.width = '32px';
  buttonNewProject.style.height = '32px';

  signNewProject.style.marginRight = '0px';

  footerMenu.style.paddingLeft = '29px';
  avatarMenuFooter.style.marginRight = '0px';
  authorFooterMenu.classList.add('menu-footer__author--closed');
  buttonFooterMenu.classList.add('menu-footer__button--closed');
};

const openMenu = () => {
  sidebarMenu.classList.remove('menu--closed');
  menuLogo.classList.remove('menu-header__logo--closed');
  linksNav.forEach((link) => link.classList.remove('menu-nav__link--closed'));
  countInbox.classList.remove('menu-nav__count--closed');
  spotInbox.classList.add('visually-hidden');
  itemsNav.forEach((item) => {
    item.style.width = '294px';
  });
  listProject.classList.remove('menu-projects__list--closed');
  headingProject.classList.remove('menu-projects__heading--closed');
  menuProject.style.marginBottom = '68px';

  buttonNewProject.style.fontSize = '12px';
  buttonNewProject.style.lineHeight = '16px';
  buttonNewProject.style.marginLeft = '24px';
  buttonNewProject.style.paddingLeft = '89px';
  buttonNewProject.style.paddingRight = '90px';
  buttonNewProject.style.width = '294px';
  buttonNewProject.style.height = '37px';
  buttonNewProject.style.paddingTop = '10px';
  buttonNewProject.style.paddingBottom = '10px';
  signNewProject.style.marginRight = '4px';

  authorFooterMenu.classList.remove('menu-footer__author--closed');
  avatarMenuFooter.style.marginRight = '16px';
  buttonFooterMenu.classList.remove('menu-footer__button--closed');
}

const toggleMenu = () => {
  if (sidebarMenu.classList.contains('menu--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
};

menuToggle.addEventListener('click', toggleMenu);

