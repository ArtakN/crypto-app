function formatPrice(price) {
   return price.toLocaleString('en-US', {    // форматирует цифри как 1,234.00
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
   })
}

function formatPriceChange(priceChange) {
   return priceChange.toFixed(2)
}

export function generateTrendHTML(item) {

   const formattedPrice = formatPrice(item.current_price)
   const formattedPriceChange = formatPriceChange(item.price_change_percentage_24h)

   return `
   <div class="trend">
      <div class="trend__top">
         <img src=${item.image} alt="Coin Logo" class="trend__logo">
         <p class="trend__symbol">${item.symbol}</p>
         <p class="trend__name">${item.name}</p>
      </div>
      <div class="trend__bottom">
         <div>
            <p class="trend__price">$${formattedPrice}</p>
            <p class="trend__rate${item.price_change_percentage_24h >= 0 ?
         '_positive' :
         '_negative'}">
               ${formattedPriceChange}%
            </p>
         </div>
         <img src=${item.price_change_percentage_24h >= 0 ?
         './img/icons/priceUp_icon.png' :
         './img/icons/priceDown_icon.png'
      } alt="Price rise image">
      </div>
   </div>
   `;
}