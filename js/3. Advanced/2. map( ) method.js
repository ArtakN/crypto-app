/*
   .map() method - an inbuilt JS method for iterating over arrays
*/

// ========================================================================
/* we use .map() mehtod to call the function for every element of an array
   and the new elements will be passed in a new array, the new array will
   have the same length as the original array
   
   the original array is still intact (нетронутый), we haven't change it */

// -----------------------------------------------------------------------
// example

// business in Europ has this energy costs for the past 6 months
const energyCostEuros = [140, 153, 164, 153, 128, 146]

// we need to count this in us dollar - the usd/eur rate is 1.133
const exchangeRate = 1.13

// we can do it with for loop
const energyCostDollars = []
// -> [158.2, 172.89, 185.32, 172.89, 144.64, 164.98]

for (let i = 0; i < energyCostEuros.length; i++) {
   energyCostDollars.push((energyCostEuros[i] * exchangeRate))
}

console.log(energyCostDollars)

// but there is a better way to do that - .map() method

/* the function inside map method has one parameter, 
   it is every element of the original array  */
const energyCostDollars = energyCostEuros.map(function (euroCost) {
   /* so the function gets every element of the original array,
      does with it some manipulations and returns a new element
      and passes it to a new arrray */
   return euroCost * exchangeRate
})

console.log(energyCostDollars)
// -> [158.2, 172.89, 185.32, 172.89, 144.64, 164.98] 

// -----------------------------------------------------------------------------

// another example

const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

// with map mehtod we will crete a new array with html elements
const guestsHtml = guestList.map(function (guest) {
   return `<div class="box">${guest}</div>`
})

// then we will render the html elemetns
document.getElementById('list').innerHTML = guestsHtml
// =============================================================================