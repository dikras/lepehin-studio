const sidebar = document.querySelector('.sidebar');

const sidebarSmall = sidebar.querySelector('.sidebar-small');
const sidebarSmallToggle = sidebarSmall.querySelector('.sidebar-small__toggle');
const sidebarSmallHeader = sidebarSmall.querySelector('.sidebar-small__header');
const sidebarSmallSearchBtn = sidebarSmall.querySelector('.sidebar-small__search-btn');
const sidebarSmallNav = sidebarSmall.querySelector('.sidebar-small__nav');
const sidebarSmallList = sidebarSmallNav.querySelector('.sidebar-small__list');
const sidebarSmallItems = sidebarSmallNav.querySelectorAll('.sidebar-small__item');
const sidebarSmallProject = sidebarSmall.querySelector('.sidebar-small__projects');
const sidebarSmallFooter = sidebarSmall.querySelector('.sidebar-small__footer');

const sidebarBig = sidebar.querySelector('.sidebar-big');
const sidebarBigToggle = sidebarBig.querySelector('.sidebar-big__toggle');
const sidebarHeaders = sidebar.querySelectorAll('header');
const sidebarBigHeader = sidebarBig.querySelector('.sidebar-big__header');
const sidebarBigLogo = sidebarBigHeader.querySelector('.sidebar-big__img');
const sidebarBigSearchInput = sidebarBig.querySelector('.sidebar-big__search-input');
const sidebarBigNav = sidebarBig.querySelector('.sidebar-big__nav');
const sidebarBigList = sidebarBigNav.querySelector('.sidebar-big__list');
const sidebarBigItems = sidebarBigNav.querySelectorAll('.sidebar-big__item');
const sidebarBigProjectLink = sidebarBig.querySelector('.sidebar-big__projects-link');
const sidebarBigFooter = sidebarBig.querySelector('.sidebar-big__footer');
const sidebarBigFooterName = sidebarBigFooter.querySelector('.sidebar-big__footer-name');
const sidebarBigFooterJob = sidebarBigFooter.querySelector('.sidebar-big__footer-job');

const openMenu = () => {
  if (sidebarBig.classList.contains('sidebar--closed')) {
    sidebarBig.classList.remove('sidebar--closed');
  }
  sidebarSmall.classList.add('sidebar--closed');
};

const closeMenu = () => {
  if (sidebarSmall.classList.contains('sidebar--closed')) {
    sidebarSmall.classList.remove('sidebar--closed');
  }
  sidebarBig.classList.add('sidebar--closed');
};

sidebarSmallToggle.addEventListener('click', openMenu);
sidebarBigToggle.addEventListener('click', closeMenu);

const switcherTheme = sidebar.querySelector('input[type="checkbox"]');

const switchToDarkTheme = () => {
  sidebarSmall.classList.add('sidebar--dark');
  sidebarBig.classList.add('sidebar--dark');
  sidebarHeaders.forEach((header) => header.classList.add('sidebar__header--dark'));
  sidebarBigLogo.src = './images/logo-white.svg';
  sidebarSmallSearchBtn.classList.add('sidebar-small__search-btn--dark');
  sidebarBigSearchInput.classList.add('sidebar-big__search-input--dark');
  sidebarSmallList.classList.add('sidebar-small__list--dark');
  sidebarSmallItems.forEach((item) => item.classList.add('sidebar-small__item--dark'));
  sidebarBigList.classList.add('sidebar-big__list--dark');
  sidebarBigItems.forEach((item) => item.classList.add('sidebar-big__item--dark'));
  sidebarSmallProject.classList.add('sidebar-small__projects--dark');
  sidebarBigProjectLink.classList.add('sidebar-big__projects-link--dark');
  sidebarSmallFooter.classList.add('sidebar-small__footer--dark');
  sidebarBigFooter.classList.add('sidebar-big__footer--dark');
  sidebarBigFooterName.classList.add('sidebar-big__footer-name--dark');
  sidebarBigFooterJob.classList.add('sidebar-big__footer-job--dark');
};

const switchToLightTheme = () => {
  sidebar.classList.remove('sidebar--dark');
  sidebarSmall.classList.remove('sidebar--dark');
  sidebarBig.classList.remove('sidebar--dark');
  sidebarHeaders.forEach((header) => header.classList.remove('sidebar__header--dark'));
  sidebarBigLogo.src = './images/logo-black.svg';
  sidebarSmallSearchBtn.classList.remove('sidebar-small__search-btn--dark');
  sidebarBigSearchInput.classList.remove('sidebar-big__search-input--dark');
  sidebarSmallList.classList.remove('sidebar-small__list--dark');
  sidebarSmallItems.forEach((item) => item.classList.remove('sidebar-small__item--dark'));
  sidebarBigList.classList.remove('sidebar-big__list--dark');
  sidebarBigItems.forEach((item) => item.classList.remove('sidebar-big__item--dark'));
  sidebarSmallProject.classList.remove('sidebar-small__projects--dark');
  sidebarBigProjectLink.classList.remove('sidebar-big__projects-link--dark');
  sidebarSmallFooter.classList.remove('sidebar-small__footer--dark');
  sidebarBigFooter.classList.remove('sidebar-big__footer--dark');
  sidebarBigFooterName.classList.remove('sidebar-big__footer-name--dark');
  sidebarBigFooterJob.classList.remove('sidebar-big__footer-job--dark');
};

const toggleTheme = () => {
  if (switcherTheme.checked === true) {
    switchToDarkTheme();
  } else {
    switchToLightTheme();
  }
};

switcherTheme.addEventListener('change', toggleTheme);
