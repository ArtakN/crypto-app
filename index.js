import { articles } from './data.js';

const trendBlock = document.querySelector('.home__trends')
const marketBlock = document.querySelector('.market__listItmes')

const pagItems = document.querySelectorAll('.market__pagItem')

let coinsData = []

function updatePageContent(pageNumber = 1) {

   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`

   // Make a fetch request to the API endpoint
   fetch(url)
      .then(res => res.json())
      .then(data => {

         coinsData = data

         // Clear the content of the trendBlock and marketBlock elements
         trendBlock.innerHTML = ''
         marketBlock.innerHTML = ''

         const startIndex = (pageNumber - 1) * 10
         const endIndex = startIndex + 10

         // Loop through the first 4 items in the data array and generate HTML content for the trendBlock element
         coinsData.slice().sort((a, b) => b - a).slice(0, 4).forEach(item => {
            const formattedPrice = item.current_price.toLocaleString('en-US', {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
            })

            const formattedRate = item.price_change_percentage_24h.toFixed(2)

            trendBlock.innerHTML += `
         <div class="trend">
            <div class="trend__top">
               <img src=${item.image} alt="Coin Logo" class="trend__logo">
               <p class="trend__ticker">${item.symbol}</p>
               <p class="trend__name">${item.name}</p>
            </div>
            <div class="trend__bottom">
               <div>
                  <p class="trend__price">$${formattedPrice}</p>
                  <p class="trend__rate${item.price_change_percentage_24h >= 0 ?
                  '_positive' :
                  '_negative'}">
                     ${formattedRate}%
                  </p>
               </div>
               <img src=${item.price_change_percentage_24h >= 0 ?
                  './img/icons/priceUp_icon.png' :
                  './img/icons/priceDown_icon.png'
               } alt="Price rise image">
            </div>
         </div>
      `
         })

         // Loop through all items in the data array and generate HTML content for the marketBlock element
         coinsData.slice(startIndex, endIndex).forEach((item, index) => {
            const formattedPrice = item.current_price.toLocaleString('en-US', {
               minimumFractionDigits: 2,
               maximumFractionDigits: 2,
            })

            const formattedCap = item.market_cap.toLocaleString('en-US', {
               minimumFractionDigits: 0,
               maximumFractionDigits: 0,
            })

            const formattedRate = item.price_change_percentage_24h.toFixed(2)

            marketBlock.innerHTML += `
         <li class="market__listItem">
            <div class="market__itemNumber">${index + startIndex + 1}</div>
            <div class="market__itemName">
               <img src=${item.image} alt="Coin logo">
               <span>${item.name}</span>
               <span>${item.symbol}</span>
            </div>
            <div class="market__itemPrice">$${formattedPrice}</div>
            <div class="market__itemChange${item.price_change_percentage_24h >= 0 ? '_positive' : '_negative'}">${formattedRate}%</div>
            <div class="market__itemCap">$${formattedCap}</div>
            <div class="market__itemStat">
               <img src=${item.price_change_percentage_24h >= 0 ?
                  './img/icons/priceUp_icon.png' :
                  './img/icons/priceDown_icon.png'} 
               alt = "Coin stat">
            </div >
         </li >
      `
         })
      })
}

updatePageContent()

pagItems.forEach(item => {
   item.addEventListener('click', () => {
      let pageNumber = item.textContent

      updatePageContent(pageNumber)
   })
})


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