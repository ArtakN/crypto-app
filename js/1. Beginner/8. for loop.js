// =========================================================================================
// For loop

// For example to count from 1 to 10, we need to specify:

// Where should we START counting?        from 1
// Where is the FINISH line?               to 10   
// What's the STEP SIZE we should use?         1

//       START       FINISH      STEP SIZE
for (let count = 1; count < 11; count += 1) {

   console.log(count)
   // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

   /************************************************************** 
   count is a local varible and is available only inside the loop 
   ***************************************************************/
}

// ----------------------------------------------------------------------------------------

// For loops and arrays -  we can itarate arrays with 'for loops'

/* we have an div elemnt in HTML document
      <div class="message-el"></div>    */

// we grab that element from the HTML doc in index.js
let messageEl = document.getElementById("message-el")

// we have an array with string elements
let messages = [
   "Hey, how's it going?",
   "I'm great, thank you! How about you?",
   "All good. Been working on my portfolio lately.",
   "Same here!",
   "Great to hear",
]

// we need to itarate elements of this array and pass them to the div above 

/* We need to specify:   

      Where should we START counting?         0                  (from 0 index)
      Where is the FINISH line?               < messages.length  (it is 5 here)
      What's the STEP SIZE we should use?     1     */

//    START           FINISH       STEP SIZE
for (let i = 0; i < messages.length; i++) {
   // i++ is a synctactical shuger, it increments i with 1

   /* in 'for loop' we get every element of the array (messages[i]) 
      and pass it to the div element  */
   messageEl.textContent += messages[i]
   /*************************************************************************
      if we write only = , it will render only the last element, 
      because every new element will wipe the elemnt before (like reassigment).
      so we need to write += 
      
      old element = new element                 rewriting, it will display
                                                only the new element 
      old element = old element + new element   it will display the old and 
                                                the new element together   
      **********************************************************************/
}

// to add spaces between the sentences:
messageEl.textContent += messages[i] + " "
// =========================================================================================

// =========================================================================================
/**** there is one important thing here to remember: 
 *    when we add a new element of an array by clicking a button we need 
 *    to have a default value, otherwise after every click it will 
 *    render the new elemet + all old elements again and again.     */
function renderGame() {

   // default value - clear old vershion of the array
   cardsEl.textContent = ""

   for (i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
   }
}
// =========================================================================================

// =========================================================================================
// Challenge

// The generateSentence(desc, arr) function takes two parameters: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries" and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"],
// it should return: "The 2 best fruits are Apples, Bananas"

// check if it is the last element and don't use comma after it

// Use a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {

   let baseString = `The ${arr.length} ${desc} are `

   const lastIndex = arr.length - 1

   for (let i = 0; i < arr.length; i++) {

      if (i === lastIndex) {           // if this is the last element of the array
         baseString += arr[i]          // then will not show "," after it
      } else {
         baseString += arr[i] + ", "   // if it isn't the last element, than will show ", " after the element
      }
   }

   return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)
// The 2 highest mountains are Moint Everest, K2
// =========================================================================================

// =========================================================================================
// ****************
// Multiple render

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
   "images/hip1.jpg",
   "images/hip2.jpg",
   "images/hip3.jpg"
]

const container = document.getElementById("container")

function renderImages() {
   for (let i = 0; i < imgs.length; i++) {
      container.innerHTML += `<img class="team-img" src="${imgs[i]}">`
      /* it will work, but it isn't a good idea to put container.innerHTML
         in a loop, because it will render the DOM 3 time, it is a cost     */
   }
}

// so we need to refactor it
function renderImages() {

   // default value
   let imgsBox = ""

   for (let i = 0; i < imgs.length; i++) {
      imgsBox += `<img class="team-img" src="${imgs[i]}">`
   }

   // it will render the DOM once
   container.innerHTML = imgsBox
}

renderImages()
// =========================================================================================