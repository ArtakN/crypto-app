// chainging .fill() and .map() methods onto 'new Array'

// =======================================================================
/* here we 
      -created an array with 10 undefined elemnts using array constructor
      -converted each element to a coin emoji
      -map the array and get a new array with html elements
      -get a string from the array elements using method join('')   */
const poisonCoins = new Array(10).fill('🪙').map(function (coin) {

      // we get each coin and pass it to a html element 
      return `<div class="box">${coin}</div>`

      /* we swipe the ',' after every element in the array
         using empty string as a seperator in the method join('') */
}).join('')

// in html doc in coins container we will get all 1000 new elements 
document.getElementById('coins').innerHTML = poisonCoins

// ----------------------------------------------------------------------

// another real example

// we crete a new array in a function, get array length as a parameter 
function getDicePlaceholderHtml(diceCount) {
      /* at first fill the array with 0 elements, then map it and
         and get a new array with html elements   */
      return new Array(diceCount).fill(0).map(function () {
            return `<div class="placeholder-dice"></div>`
            // and set empty strings seperator between the elements 
      }).join('')
}
// =======================================================================