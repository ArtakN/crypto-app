// on click nav tabs add smooth effect during scroll
const navLinks = document.querySelectorAll('.header__menuItem');

// Add a click event listener to each nav link
navLinks.forEach(link => {
   link.addEventListener('click', event => {
      // Prevent the default behavior of the link
      event.preventDefault();
      // Get the target element from the link's href attribute
      const targetId = link.getAttribute('href');
      console.log(targetId)
      const targetElement = document.querySelector(targetId);

      // Scroll the target element into view with smooth behavior
      targetElement.scrollIntoView({ behavior: 'smooth' });
   });
});


// add header shadow on scroll
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
   if (window.scrollY > 0) {
      header.classList.add('header__shadow')
   } else {
      header.classList.remove('header__shadow')
   }
})

//  toggle dark/light modes
const modeToggleEl = document.querySelector('.header__modeIcons')
const rootEl = document.documentElement

function toggleMode() {
   let activeMode = rootEl.getAttribute('data-theme')
   activeMode = activeMode === 'light' ? 'dark' : 'light'
   rootEl.setAttribute('data-theme', activeMode)

   localStorage.setItem('mode', activeMode)
}

modeToggleEl.addEventListener('click', toggleMode)

// Mobile menu
const burgerEl = document.querySelector('.header__burgerIcon')
const mobileMenu = document.querySelector('.header__mobileMenu')
const closeMenu = document.querySelector('.header__closeMobileMenu')
const mobileMenuItem = document.querySelectorAll('.header__mobileMenuItem')

function showMobileMenu() {
   mobileMenu.classList.add('mobile-visable')
}

function hideMobileMenu() {
   mobileMenu.classList.remove('mobile-visable')
}

burgerEl.addEventListener('click', showMobileMenu);

closeMenu.addEventListener('click', hideMobileMenu);

mobileMenuItem.forEach(item => {
   item.addEventListener('click', hideMobileMenu)
})

// hide mobile menu if it is opend and viewport become wider than 768px
window.addEventListener('resize', function () {
   window.innerWidth >= 768 && hideMobileMenu()
})