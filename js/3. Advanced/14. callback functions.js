// Function is a first-class object in JavaScript

// here we declare myFunction
let myFunction = function (a, b) {
   console.log(a + b)
}

let myFunction2 = myFunction  /* here we don't use parentheses after myFunction
                                 because we don't call it, but just copy */
myFunction2(1, 2)
// -> 3

// but we don't need to declare myFunction as a function expression this way

// we can do a function declaration
function myFunction(a, b) {
   console.log(a + b)
}

let myFunction2 = myFunction

myFunction2(1, 2)
// -> 3

// --------------------------------------------------------------------------
// callback function in event listener

// here we use a anonymous in-line function
document.getElementById("new-deck").addEventListener("click", function () {
   fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then(res => res.json())
      .then(data => console.log(data))
})

// refactoring - using callback function insted of anonymous function

// we are creating a seperate "handleClick" function
function handleClick() {
   fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then(res => res.json())
      .then(data => console.log(data))
}

// and pass it to the event listener as a callback function
document.getElementById("new-deck").addEventListener("click", handleClick)
/* "handleClick" is a callback function here so we write it without prenteces
   if we add prenteces here, the function will be called automaticaly on 
   every page update - perenteces means call right now */

// --------------------------------------------------------------------------

// callback function in setTimeout

function logText() {
   console.log("I finally ran!")
}

// we pass logText() function to the setTimeout as a callback function
setTimeout(logText, 2000)
/* if here we use perenteces after the function it will not delay 2000ms and
   the function will be called immidiatly */

// --------------------------------------------------------------------------

// callbakc function in filter() method

// given an array of objects
const people = [
   { name: "Jack", hasPet: true },
   { name: "Jill", hasPet: false },
   { name: "Alice", hasPet: true },
   { name: "Bob", hasPet: false },
]

/* we need create a new "peopleWithPets" array with the `.filter()` array 
   method that contains only the objects where "hasPet" is true   */
const peopleWithPets = people.filter(fucntion(person) {
   return person.hasPet === true
})

/* refactoring with arrow function
const peopleWithPets = people.filter(person => person.hasPet)
// we don't wrote  === true, because person.hasPet is a boolean   */

// Move the anonymous in-line function to its own, named function
function gimmeThePets(person) {
   return person.hasPet    // this is the same - person.hasPet === true
}

/* refactoring with arrow function
const gimmeThePets = person => person.hasPet    */

const peopleWithPets = people.filter(gimmeThePets)
// --------------------------------------------------------------------------