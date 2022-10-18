// Menu Responsivo //
let show = true

const menu = document.querySelector('.menu')
const menuToggle = menu.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('on', show)
  show = !show
})
