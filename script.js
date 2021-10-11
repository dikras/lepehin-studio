const sidebar = document.querySelector('.sidebar');

const sidebarSmall = sidebar.querySelector('.sidebar-small');
const sidebarSmallHeader = sidebarSmall.querySelector('.sidebar-small__header');

const sidebarBig = sidebar.querySelector('.sidebar-big');
const sidebarBigHeader = sidebarBig.querySelector('.sidebar-big__header');

const openMenu = () => {
  sidebarSmall.classList.add('sidebar-small--closed');
  sidebarBig.classList.remove('sidebar-big--closed');
}


const closeMenu = () => {
  sidebarSmall.classList.remove('sidebar-small--closed');
  sidebarBig.classList.add('sidebar-big--closed');
}

sidebarSmallHeader.addEventListener('click', () => {
  openMenu();
  sidebarSmallHeader.removeEventListener('click', openMenu);
});

sidebarBigHeader.addEventListener('click', () => {
  closeMenu();
  sidebarBigHeader.removeEventListener('click', closeMenu);
});
