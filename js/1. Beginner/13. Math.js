/* 
   Math object
      .random() method
      .floor() method
*/

// =============================================================================
// Math is an object

// Generate random numbers using `random()` method of Math object

let randomNumber = Math.random()

console.log(randomNumber)           // 0.08754213485777445

// it generates a random number between 0 and 1 (not inclusive of 1) 
// 0.000... --> 0.999...

// -----------------------------------------------------------------------------

// Flooring the number using `floor` method of Math object

// it removes the decimals
let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)
// -> 3

// -----------------------------------------------------------------------------

// Create a random number from 1 to 10

// we will get here a random number from 0 to 1 (not inclusive of 1) 
Math.random()
// for example: 0.65422394741

// to get a random number from 0 to 10 (not inclusive of 10)
Math.random() * 10
// for example:   6.5422394741

// here we will get a random number from 0 to 9
Math.floor(Math.random() * 10)
// for example:   6

// to get a random naumber form 1 to 10
Math.floor(Math.random() * 9) + 1
// =============================================================================