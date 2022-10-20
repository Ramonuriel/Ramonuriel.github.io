// Menu Responsivo //
let show = true

const menu = document.querySelector('.menu')
const menuToggle = menu.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menu.classList.toggle('on', show)

  show = !show
})
