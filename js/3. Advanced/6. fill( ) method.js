// the .fill() method - an inbuilt JS method for filling array

/* what does the .fill() method do?

      -it converts the elements in an array to a provided static value
*/
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// if we will leave parenteces empty it will fill the array with undefineds
const cars = new Array(10).fill()

console.log(cars)
// -> [undefined, undefined, ... , undefined]

// the same we can do like this
[...new Array(10)]
// -> [undefined, undefined, ... , undefined]
// -------------------------------------------------------------------------

/*
Challenge
1. Create a new array with a length of 1000 and save it to a
const called goldCoins
2. Convert each element of the array to a coin emoji 🪙
3. Log out the new array
* /

const goldCoins = new Array(1000).fill('🪙')

console.log(goldCoins)
// -> ['🪙','🪙'...]    -will get an array with 1000 goldCoins elements

// -------------------------------------------------------------------------
