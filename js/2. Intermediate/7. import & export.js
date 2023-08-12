
/* 
   import & export
      export directly
      export by default
      export functions
      export constructor funtions
*/

// =============================================================================
// 1. we exporting some data from data.js direcly
export const dinnerPartyGuests = [
   'Elvis Presley',
   'The Queen of England',
   'Alan Turing',
   'Nelson Mandela',
   'Mahatma Gandhi',
   'Aristotle',
   'Albert Einstein'
]

// we importing the data from data.js to index.js
import { dinnerPartyGuests } from './data.js'

/*******************************************************************************
   it will work if only we add attribut type = "module" to the script tag in HTML document   */

<body>
   <script src="index.js" type="module"></script>
</body>
// *****************************************************************************

// =============================================================================
// 2. export by default

const dinnerPartyGuests = [
   'Elvis Presley',
   'The Queen of England',
   'Alan Turing',
   'Nelson Mandela',
   'Mahatma Gandhi',
   'Aristotle',
   'Albert Einstein'
]

export default dinnerPartyGuests

// when we export by default we import without curly braces (like react)
import dinnerPartyGuests from './data.js'

/* if we export by default, we can use any name in import

   for example:

      import charData from './data.js' */
// =============================================================================

// =============================================================================
// 3. we write name of exported element in curly braces

// usually we use this version to export functions    
function getDiceRollArray(diceCount) {
   return new Array(diceCount).fill(0).map(function () {
      return Math.floor(Math.random() * 6) + 1
   });
}

// we export the name of function in curly braces
export { getDiceRollArray }

// in import we need to write exact name in curly braces, too
import { getDiceRollArray } from './utils.js'

/* first version will work for functions, too. but this version is easier

   and if we have more than 1 function we will write all of the function names together

      export { getDiceRollArray, anyOtherFunctionName, moreHere }

      import { getDiceRollArray, anyOtherFunctionName, moreHere } from './utils.js'    */
// =============================================================================

// =============================================================================
// we will export constructor functions by default
function Character(data) {

}

export default Character

// import
import Character from '/Character.js'
// =============================================================================