
// arrow functins - a new addition to JS with ES6

// ===============================================================---========
// this is a regular function
function alertSpend(amount) {
   return `Warning! You just spent £${amount}!`
}


// this is an arrow function
const alertSpend = (amount) => {
   return `Warning! You just spent £${amount}!`
}

// --------------------------------------------------------------------------

// when the function has 1 parameter we don't need brackets
const alertSpend = amount => {
   return `Warning! You just spent £${amount}!`
}

// --------------------------------------------------------------------------

/*** but if the function has no any parrameter or has more than one parameter
    then we have to write beckets   */
const alertSpend = () => {
   return `Warning! You just spent 100$!`
}

// --------------------------------------------------------------------------

/* if code inside the function is one line, we write code without curly 
   braces and return keyword  */
const alertSpend = amount => `Warning! You just spent £${amount}!`

// --------------------------------------------------------------------------

// more complex logic reqires the curly braces and the return keyword
const speedWarning = (speedLimit, speed) => {
   if (speed > speedLimit) {
      return `You are going at ${speed} mph!`
   }
}

console.log(speedWarning(60, 40))
// ==========================================================================

// ==========================================================================
/* breckets and braces

      -if we have one parameter we don't need brackets
      -if we have 0 or 2+ parameters we need brackets
      -we can return one line of code without curly braces and return keyword
      -more complex logic reqires the curly braces and the return keyword  */
// ==========================================================================

// ==========================================================================
// there is a map function
const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map(function (distance) {
   return Math.round(distance * 1.6)
})


// Refactor this.map method so the inline function is an arrow function.
const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6))

console.log(distanceTraveledKm)
// ==========================================================================