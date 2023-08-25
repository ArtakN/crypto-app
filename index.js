import { fetchedData } from './store.js';
import { generateTrendHTML } from './trends.js'
import { articles } from "./store";
import './header.js'

const trendData = [...fetchedData]

const trendBlock = document.querySelector('.home__trends')
const marketBlock = document.querySelector('.market__listItmes')
const nameColumnTitle = document.querySelector('.market__nameTitle')
const priceColumnTitle = document.querySelector('.market__priceTitle')
const changeColumnTitle = document.querySelector('.market__changeTitle')
const marketCapColumnTitle = document.querySelector('.market__capTitle')
const paginationItems = document.querySelectorAll('.market__pagItem')


function formatPrice(price) {
   return price.toLocaleString('en-US', {    // форматирует цифри как 1,234.00
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
   })
}

function formatPriceChange(priceChange) {
   return priceChange.toFixed(2)
}

function formatCap(cap) {
   return cap.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   })
}

function generateMarketHTML(item, index, startIndex) {

   const formattedPrice = formatPrice(item.current_price);
   const formattedCap = formatCap(item.market_cap);
   const formattedPriceChange = formatPriceChange(item.price_change_percentage_24h);

   return `
     <li class="market__listItem">
       <div class="market__itemNumber">${index + startIndex + 1}</div>
       <div class="market__itemName">
         <img src=${item.image} alt="Coin logo">
         <span>${item.name}</span>
         <span class='market__itemSymbol'>${item.symbol}</span>
       </div>
       <div class="market__itemPrice">$${formattedPrice}</div>
       <div class="market__itemChange${item.price_change_percentage_24h >= 0 ? '_positive' : '_negative'}">${formattedPriceChange}%</div>
       <div class="market__itemCap">$${formattedCap}</div>
       <div class="market__itemStat">
         <img src=${item.price_change_percentage_24h >= 0 ?
         './img/icons/priceUp_icon.png' :
         './img/icons/priceDown_icon.png'}
         alt = "Coin stat">
       </div >
     </li >
   `;
}

function updatePageContent(pageNumber = 1) {

   trendBlock.innerHTML = '';
   marketBlock.innerHTML = '';

   const startIndex = (pageNumber - 1) * 10;
   const endIndex = startIndex + 10;

   // render trend block
   trendData.sort((a, b) => b - a).slice(0, 4).forEach((item) => {
      trendBlock.innerHTML += generateTrendHTML(item)
   })

   // render market block
   fetchedData.slice(startIndex, endIndex).forEach((item, index) => {
      marketBlock.innerHTML += generateMarketHTML(item, index, startIndex)
   })
}

updatePageContent()


// sort coins by name
let isNameSortedAsc = false

function sortByName() {
   priceColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   changeColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   marketCapColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')

   if (isNameSortedAsc) {
      fetchedData.sort((a, b) => a.name.localeCompare(b.name))
      nameColumnTitle.classList.add('market__sortedTitle', 'market__sortedTitle-asc')
   } else {
      fetchedData.sort((a, b) => b.name.localeCompare(a.name))
      nameColumnTitle.classList.add('market__sortedTitle')
      nameColumnTitle.classList.remove('market__sortedTitle-asc')
   }
   isNameSortedAsc = !isNameSortedAsc

   updatePageContent()
}

nameColumnTitle.addEventListener('click', () => sortByName())


// sort coins by price
let isPriceSortedAsc = false

function sortByPrice() {
   nameColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   changeColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   marketCapColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')

   if (isPriceSortedAsc) {
      fetchedData.sort((a, b) => a.current_price - b.current_price)
      priceColumnTitle.classList.add('market__sortedTitle', 'market__sortedTitle-asc')
   } else {
      fetchedData.sort((a, b) => b.current_price - a.current_price)
      priceColumnTitle.classList.add('market__sortedTitle')
      priceColumnTitle.classList.remove('market__sortedTitle-asc')
   }
   isPriceSortedAsc = !isPriceSortedAsc
   updatePageContent()
}

priceColumnTitle.addEventListener('click', () => sortByPrice())


// sort coins by change
let isChangeSortedAsc = false

function sortByChange() {
   nameColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   priceColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   marketCapColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')

   if (isChangeSortedAsc) {
      fetchedData.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      changeColumnTitle.classList.add('market__sortedTitle', 'market__sortedTitle-asc')

   } else {
      fetchedData.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      changeColumnTitle.classList.add('market__sortedTitle')
      changeColumnTitle.classList.remove('market__sortedTitle-asc')
   }
   isChangeSortedAsc = !isChangeSortedAsc
   updatePageContent()
}

changeColumnTitle.addEventListener('click', () => sortByChange())


// sort coins by market cap
let isMarketCapSortedAsc = false

function sortByMarketCap() {
   nameColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   priceColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   changeColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')

   if (isMarketCapSortedAsc) {
      fetchedData.sort((a, b) => a.market_cap - b.market_cap)
      marketCapColumnTitle.classList.add('market__sortedTitle', 'market__sortedTitle-asc')
   } else {
      fetchedData.sort((a, b) => b.market_cap - a.market_cap)
      marketCapColumnTitle.classList.add('market__sortedTitle')
      marketCapColumnTitle.classList.remove('market__sortedTitle-asc')
   }

   isMarketCapSortedAsc = !isMarketCapSortedAsc
   updatePageContent()
}

marketCapColumnTitle.addEventListener('click', () => sortByMarketCap())

// pagination
paginationItems.forEach(item => {
   item.addEventListener('click', () => {
      let pageNumber = item.textContent

      updatePageContent(pageNumber)
   })
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

