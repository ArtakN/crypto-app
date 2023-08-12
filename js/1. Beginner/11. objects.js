/*
   Objects
      key: value
      properties
      methods
      that notation, bracket notation
      objects in array
*/

// ===================================================================================
// Object - Function (Method) - Argument

let countEl = document.getElementById("count-el")
/* -document is an object, 
   -getElementByID() is a method of the document object  (method is a function)
   -"count-el" is an argument thet we pass in the getElementByID() function   */

console.log(countEl)
/* -console is an object,
   -log() is a method of the console object  (method is a function)
   -countEl is an argument thet we pass in the log() function of the console object */
// ===================================================================================

// ===================================================================================
/* if we have some varibles that are inherently connected, it will have 
   more sence somehow to combine them into a single unity, in a object.
   it contains different data type   */

let player = {
   // key: value,
   title: "Learn CSS Grid for free",
   lessons: 16,
   creator: "Per Harald Borgen",
   length: 63,
   level: 2,
   isFree: true,
   tags: ["html", "css"]
}

// -----------------------------------------------------------------------------
// "that notation", "bracket notation"

// to acces a velue of the object we do "that notation" - object.key    - most used
console.log(course.level)

// the second way to get a value of the object is "bracket notation" - object["key"]
console.log(course["tags"])
// bracket notation used only for properties

// -----------------------------------------------------------------------------

// Methods of object

// We can create functions inside an object, they called methods
let player = {
   name: "Per",
   chips: 200,
   sayHello: function () {
      console.log("Hello!")
   }
}

// to access a method we use only "that notation"
player.sayHello()

// we have seen this syntex before, for example
Math.random()  // Math is an object, random is a method of the Math
// =============================================================================

// =============================================================================
// objects in array

// how to get a property of an object inside an array
const newArray = [
   {
      name: 'Artak',
      age: 37,
   },
   {
      ...
   },
   {
      ...
   }
]

// property `name` of an object with index 0 in newArray
let firstProp = newArray[0].name

console.log(firstProp)
// -> Artak

// Hint:
// console.log(newArray)            [{name: 'Artak, age: 37}, {...}, {...}]
// console.log(newArray[0])         {name: 'Artak, age: 37}
// console.log(newArray[0].name)    'Artak'
// =============================================================================