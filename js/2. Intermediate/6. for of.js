
/*
   for of
      iterate array
      iterate nested arrray
      element.children
*/

// ==================================================================================
// for of - a nicer way of iterating 

/* here we have a data consist of an array that includes objects 
   as we know we can get characters array elements with for loop, but using 
   for loop here will be nusty, there is a more comfortable way to do that   */
const characters = [
   {
      title: 'Ninja',
      emoji: '🥷',
      powers: ['agility', 'stealth', 'aggression'],
   },
   {
      title: 'Sorcerer',
      emoji: '🧙',
      powers: ['magic', 'invisibility', 'necromancy'],
   },
   {
      title: 'Ogre',
      emoji: '👹',
      powers: ['power', 'stamina', 'shapeshifting'],
   },
   {
      title: 'Unicorn',
      emoji: '🦄',
      powers: ['flight', 'power', 'purity'],
   }
]

// for of is more comfort way to get elements from an array

// character (we can write here any name) is every element of the characters array
for (let character of characters) {

   // and here we will get every element of the array and use them 

   // for example we log out them, 
   console.log(character)
   // -> we get a list of objects that are the elements of the array

   // ---------------------------------------------------------------------------------
   console.log(character.title)
   /* -> here we get a list of the values of the titles 
            Ninja
            Sorcerer
            Ogre
            Unicorn  */

   // ---------------------------------------------------------------------------------
   /* the value of powers key in the objects is an array .
      here is how we can get nested array values. 
      for this we need to create another for of loop inside the loop   */
   for (let power of character.powers) {
      console.log(power)
      /* -> agility
            stealth
            aggression
            magic
            invisibility
            necromancy
            power
            stamina
            shapeshifting
            flight
            power
            purity   */
   }
}
// ============================================================================================

// ============================================================================================
/* we need to create a function that get an array as a parameter and returns a new array with 
   all of nested powers array elements inside the characters  */

function nestedArray(arrayData) {

   // we created a new empty array that will include all of the elements of the nested powers array 
   const newArray = []

   // we get each element of the array (passed parameter)
   for (let element of arrayData) {

      // we get each element of the nested powers array 
      for (let power of element.powers) {

         // each power element we are pushing to the new powerArray
         newArray.push(power)
      }
   }

   return newArray
}

// we call the function and pass characters array inside as an argument
console.log(nestedArray(characters))
// and will get a new array with all elements of the nested array 
// -> ['agility', 'stealth', 'aggression', 'magic', 'invisibility', 'necromancy', ...]
// ============================================================================================

// ============================================================================================
/* we need all the items of the new array (that we get above) to pass to the HTML div element 
   as a string in a <p></p> tag

      <div class="container" id="container">we need to pass them here</div>   */

// here we get control to the div element
containerEl = document.getElementById("container")

// here in a varible words we add our new array that we got above
const words = nestedArray(characters)

// we creat an empty string
let wordEl = ""

/* we iterate over words array and put each word in a <p> tag and 
   then add them to the wordEl created above */
for (let word of wordsAray) {

   wordEl += `<p>${word}</p>`
   /* += will add all p tags , if we write  = it only will add the last word,
      because every new element will wipe the element before    */
}

// we render all <p></p> elements with word inside in the container elements
containerEl.innerHtml = wordEl
// ============================================================================================

// ============================================================================================
/* element.children

   instead of giving each child element of a container own unique ID, 
   we can use element.children    */

/* HTMl

      <div id="container">
         <div></div>
         <div></div>
         <div></div>
      </div>               */

// element.children returns an array with all children elements of the parent elemenmt
const contaienrEl = document.getElementById("container");

console.log(containerEl.children)
// -> HTMLCollection

// we can grab a child element by the index
console.log(containerEl.children[0])
// -> <div></div>    this is the first child element of the container element

// we can itarate this array with for of and use children elements
for (const child of containerEl.children) {
   child.innerHtml = `<img src=${imgSrc} class=${imgClassName}/>`
}
// =============================================================================================