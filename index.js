import { coins } from './data.js';
import { articles } from './data.js';

// add header shadow on scroll
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
   if (window.scrollY > 0) {
      header.classList.add('header__shadow')
   } else {
      header.classList.remove('header__shadow')
   }
})

// on click nav tabs add smooth effect during scroll 
const navLinks = document.querySelectorAll('.nav-link');

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

// trend 
const trendBlock = document.querySelector('.home__trends')
const trends = coins.slice().sort((a, b) => b.rate - a.rate).slice(0, 4)

trends.forEach((item) => {

   const formattedPrice = item.price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   });

   const formattedRate = item.rate.toFixed(2)

   trendBlock.innerHTML += `
   <div class="trend">
      <div class="trend__top">
         <img src=${item.logo} alt="Coin Logo" class="trend__logo">
         <p class="trend__ticker">${item.ticker}</p>
         <p class="trend__name">${item.name}</p>
      </div>
      <div class="trend__bottom">
         <div>
            <p class="trend__price">$${formattedPrice}</p>
            <p class="trend__rate${item.rate >= 0 ?
         '_positive' :
         '_negative'}">
         ${formattedRate}%
         </p>
         </div>
         <img src=${item.rate >= 0 ?
         './img/icons/priceUp_icon.png' :
         './img/icons/priceDown_icon.png'
      } alt="Price rise image">
      </div>
   </div>
   `
})


// market
const marketBlock = document.querySelector('.market__listItmes')

coins.forEach((item) => {

   const formattedPrice = item.price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   });

   const formattedCap = item.cap.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   });

   const formattedRate = item.rate.toFixed(2)

   marketBlock.innerHTML += `
      <li class="market__listItem">
         <div class="market__itemNumber">${item.number}</div>
            <div  class="market__itemName">
               <img src=${item.logo} alt="Coin logo">
               <span>${item.name}</span>
               <span>${item.ticker}</span>
            </div>
         <div class="market__itemPrice">$${formattedPrice}</div>
         <div class="market__itemChange${item.rate >= 0 ? '_positive' : '_negative'}">${formattedRate}%</div>
         <div class="market__itemCap">$${formattedCap}</div>
         <div class="market__itemStat">
            <img src=${item.rate >= 0 ?
         './img/icons/priceUp_icon.png' :
         './img/icons/priceDown_icon.png'} 
            alt = "Coin stat">
         </div >
      </li >
   `
})

// articles
const articleBlock = document.querySelector('.learn__articleBlock')

articles.forEach(item => {
   articleBlock.innerHTML += `
      <div class="learn__article article">
         <img src=${item.img} alt="Article image" class="article__img">
         <div class="article__textBlock">
            <p class="article__title">${item.title}</p>
            <p class="article__subTitle">${item.sub}</p>
         </div>
      </div>
   `
})