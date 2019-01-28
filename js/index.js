const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuBranding = document.querySelector('.menu-branding')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')

let shown = false
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if(!shown) {
    menuBtn.classList.add('hide')
    menu.classList.add('show')
    menuBranding.classList.add('show')
    menuNav.classList.add('show')
    navItems.forEach(item => item.classList.add('show'))
    shown = true;
  } else {
    menuBtn.classList.remove('hide')
    menu.classList.remove('show')
    menuBranding.classList.remove('show')
    menuNav.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))
    shown = false;
  }
}
