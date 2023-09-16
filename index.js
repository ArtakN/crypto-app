import { fetchedData } from './store.js';
import { generateTrendHTML } from './trends.js'
import { articles } from "./store.js";
import './header.js'



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


// RENDER TRENDS BLOCK
const trendBlock = document.querySelector('.home__trends')
let i = 0;
const trendData = fetchedData.slice(0, 10);
let visableTrends = [...trendData];

function setTrendAnimation() {
   const trends = document.querySelectorAll('.trend');
   trends.forEach(trend => {
      trend.style.transform = 'translateX(-321px)';
   });
}

function trendBlockRender() {
   setTimeout(() => {
      trendBlock.innerHTML = '';

      visableTrends.forEach((item) => {
         trendBlock.innerHTML += generateTrendHTML(item);
      });

      if (i < trendData.length - 1) {
         visableTrends.shift();
         visableTrends.push(trendData[i]);
         i++;
      } else {
         i = 0;
      }
   }, 300);
}

let index = 0

function trendLabelAnimation() {
   const trendLabels = document.querySelectorAll('.home__trendLabelItem')

   trendLabels[index].style.background = '#0fae96'
   if (index === 0) {
      trendLabels[trendLabels.length - 1].style.background = ''
   } else {
      trendLabels[index - 1].style.background = ''
   }

   if (index < trendLabels.length - 1) {
      index++
   } else {
      index = 0
   }

   console.log(index)
}


// Call the function immediately
trendBlockRender();
trendLabelAnimation();

// Then call it every 3 seconds
setInterval(() => {
   setTrendAnimation();
   setTimeout(trendBlockRender, 300);
   trendLabelAnimation();
}, 3000);


// render market block
function updatePageContent(pageNumber = 1) {

   marketBlock.innerHTML = '';

   const startIndex = (pageNumber - 1) * 10;
   const endIndex = startIndex + 10;

   fetchedData.slice(startIndex, endIndex).forEach((item, index) => {
      marketBlock.innerHTML += generateMarketHTML(item, index, startIndex)
   })
}

updatePageContent()


function resetColumnTitiles() {
   nameColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   priceColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   changeColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
   marketCapColumnTitle.classList.remove('market__sortedTitle', 'market__sortedTitle-asc')
}


// sort coins by name
let isNameSortedAsc = false

function sortByName() {
   resetColumnTitiles()

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
   resetColumnTitiles()

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
   resetColumnTitiles()

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
   resetColumnTitiles()

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

      paginationItems.forEach(item => {
         item.classList.remove('market__pagItem-active')
      })

      let pageNumber = item.textContent
      item.classList.add('market__pagItem-active');
      updatePageContent(pageNumber)
   })
})


// set the background color of the first pagination item
paginationItems[0].classList.add('market__pagItem-active')


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

