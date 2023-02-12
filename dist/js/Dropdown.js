 const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('menu-dropdown')

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
}


 hamburgerBtn.addEventlistener('click',toggleMenu)
 mobileMenu.addEventlistener('click',toggleMenu)

}

document.addEventListener('DOMContentLoaded',initApp)