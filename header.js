
// on click nav tabs add smooth effect during scroll
const navLinks = document.querySelectorAll('.header__menuItem');

// Add a click event listener to each nav link
navLinks.forEach(link => {
   link.addEventListener('click', event => {
      // Prevent the default behavior of the link
      event.preventDefault();

      // Get the target element from the link's href attribute
      const targetId = link.getAttribute('href');
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