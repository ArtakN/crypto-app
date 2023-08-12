/*
   array
      length
   adding items to array
      push()
      unshift()
   removing items from arrays
      pop()
      shift()
      splice()
   slice()
   fined()
   findIndex()
   includes()
   some()
   clear old version of the array
*/
// ===========================================================================
// Arrays are usually cotains the same data type
let array = [1, 2, 3]

// but it can contains multiple data type  
let newArray = ["Artak", 37, true]

// ---------------------------------------------------------------------------

// Get array length, ellements count        - array.length
let arrayNum = [1, 2, 3]

console.log(arrayNum.length)
// -> 3   (3 elements)
// ===========================================================================

// ===========================================================================
// Adding elements to an array  

// method push()

// method `push` allows to add a new item to the end of an array
let cards = [6, 8]

cards.push(11)

console.log(cards)
// -> [6, 8, 11]

// ---------------------------------------------------------------------------

// method unshift()

/* method unshift() allows to add one or more elements to the beginning of an 
   array and returns the new length of the array */

cards.unshift(5, 7)

console.log(cards)
// -> [5, 7, 6, 8, 11]  length: 5
// ===========================================================================

// ===========================================================================
// Removing an element from an array   

// method pop()

// method `pop` allows us to remove the last item of an array
cards.pop()

console.log(cards)
// -> [5, 7, 6, 8]

// -----------------------------------------------------------------------------

// method shift()

/* method shift() allows to remove the first element of an array
   and returns the new length of the array   */
cards.shift()

console.log(cards)
// -> [7, 6, 8]  lrngth: 3

// *****************************************************************************
// method shift() can be used to take array elements one by one

// we have an array with month incomes
const income = [4500, 5222, 8500]

// we created a function that returns the first element of the array
function getMonthIncome() {
   return income.shift()
}

// by button click
incomeButton.addEventListener('click', function () {
   // we will check if there is an element inside income array
   if (cards.length > 0) {
      /* then getMonthIncome() function will be colled and get elements 
         one by one on every new click  */
      getMonthIncome()
   } else {
      console.log("No incomes yet.")
   }
})
// *****************************************************************************

// mthod splice() let us to remove an array element by index

/* The splice() method takes two arguments - from the index of the element you 
   wish to remove and the index you wish to remove up to (end not included).

The splice() method creates a new array that stores all the values that 
were removed from the original array. The original array will no longer 
contain the values removed, and its length will be updated.  */

const myArray = [1, 2, 3, 4, 5];

// remove from 1 index to 3 index (3 index not included)
const x = myArray.splice(1, 3);

console.log(`myArray values: ${myArray}`);
//  -> myArray values: 4,5

console.log(x);
// -> [1, 2, 3]

// to reomove one element (will be removed 2nd element)
const s = myArray.splice(1, 1);

// will be removed first element
const f = myArray.splice(0, 1);
// =============================================================================

// =============================================================================
/* method slice()

   The slice() method returns a shallow copy of a portion of an array into a 
   new array object selected from start to end (end not included) where start 
   and end represent the index of items in that array. The original array will 
   not be modified. 

      const nextSquares = squares.slice(0, 3)

      nextSquare array has 3 elements, hte elements of square array with index 0, 1, 2
   
   difference between methods slice() and splice() 
   
      The splice() method modifies the orgianl array
      The slice() method doesn't modify the original array 

   *****************************************************************************
   if sliec() method doesn't contain parameters (index), it will copy the full array   

      const nextSquares = squares.slice()

   nextSquares is a copy of squares array, if squares array containes an
   object it nextSquares array will contain its reaferesnce and not a copy
// =============================================================================

// =============================================================================
/* The find(function() {}) method returns the first element in the provided 
   array that satisfies the provided testing function. If no values satisfy 
   the testing function, undefined is returned.   */
const array1 = [5, 12, 8, 130, 44];

// element is every element of array1
const found = array1.find(element => element > 10);

console.log(found);
// -> 12

/* If you need the index of the found element in the array, use findIndex().
   If you need to find the index of a value, use indexOf(). (It's similar
   to findIndex(), but checks each element for equality with the value
   instead of using a testing function.)
   If you need to find if a value exists in an array, use includes().
   Again, it checks each element for equality with the value instead of
   using a testing function.
   If you need to find if any element satisfies the provided testing
   function, use some().   */
// =============================================================================

// =============================================================================
// Render the updated myEmojis array and clear old version of the array

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

// wrap the code for rendering the emojis in a function 
function renderEmojis() {

   // clear away old version of the array before it renders the updated one
   emojiContainer.innerHTML = ""

   // rendering the updated array
   for (let i = 0; i < myEmojis.length; i++) {
      const emoji = document.createElement('span')
      emoji.textContent = myEmojis[i]
      emojiContainer.append(emoji)
   }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")

pushBtn.addEventListener("click", function () {

   const emojiInput = document.getElementById("emoji-input")

   if (emojiInput.value) {
      myEmojis.push(emojiInput.value)
      emojiInput.value = ""
      renderEmojis()
   }
})
// =============================================================================