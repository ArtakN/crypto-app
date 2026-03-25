const navLinks = document.querySelectorAll('.header__menuItem')

navLinks.forEach(link => {
   link.addEventListener('click', event => {
      event.preventDefault()
      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      targetElement?.scrollIntoView({ behavior: 'smooth' })
   })
})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
   if (!header) return

   if (window.scrollY > 0) {
      header.classList.add('header__shadow')
   } else {
      header.classList.remove('header__shadow')
   }
})

const modeToggleEl = document.querySelector('.header__modeIcons')
const rootEl = document.documentElement

function toggleMode() {
   let activeMode = rootEl.getAttribute('data-theme')
   activeMode = activeMode === 'light' ? 'dark' : 'light'
   rootEl.setAttribute('data-theme', activeMode)

   localStorage.setItem('mode', activeMode)
}

modeToggleEl?.addEventListener('click', toggleMode)

const burgerEl = document.querySelector('.header__burgerIcon')
const mobileMenu = document.querySelector('.header__mobileMenu')
const closeMenu = document.querySelector('.header__closeMobileMenu')
const mobileMenuItem = document.querySelectorAll('.header__mobileMenuItem')

function showMobileMenu() {
   mobileMenu?.classList.add('mobile-visable')
}

function hideMobileMenu() {
   mobileMenu?.classList.remove('mobile-visable')
}

burgerEl?.addEventListener('click', showMobileMenu)
closeMenu?.addEventListener('click', hideMobileMenu)

mobileMenuItem.forEach(item => {
   item.addEventListener('click', hideMobileMenu)
})

window.addEventListener('resize', () => {
   if (window.innerWidth >= 768) {
      hideMobileMenu()
   }
})
