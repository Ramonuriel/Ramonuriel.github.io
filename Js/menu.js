// Menu Responsivo //
const menu = document.querySelector('.menu')

function menuToggle(event) {
  if (event.type === 'touchstart') event.preventDefalut()
  {
  }
  const menuToggle = document.getElementById('.menu-toggle')
  menu.classList.toggle('on')
}

menu.addEventListener('click', menuToggle)
menu.addEventListener('touchstart', menuToggle)
