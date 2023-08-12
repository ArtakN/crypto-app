/*
   null
   undefined
*/

// =============================================================================
// using null we signalize emptiness as a developer, 
let currentViewers = null
// we declared currentViewers varible and say this varible is empty

console.log(currentViewers)
// -> null

// then we can set a value for this verible whenever we want 
currentViewers = ["jane", "nick"]
// =============================================================================

// =============================================================================
// with undefined JavaScript signalizes emptiness

// when the variable has been declared but not assigned to a value
let someNames

// JS says us that this variable is empty
console.log(someNames)
// -> undefined

// -----------------------------------------------------------------------------

// the same we will have, if we try to get nonexistent property of an object
let newObject = {}

console.log(newObject.anyKey)
// -> undefined

// -----------------------------------------------------------------------------

// the same when we try to get an nonexistent element of an array  
let currentArray = ["jane"]

// we want to get an element with index 5
console.log(currentViewers[5])
// -> undefined

/*******************************************************************************
   On the other hand, if we try to log a value of a variable that has not been declared at all, we will get a ReferenceError, because the variable does not exist.
*******************************************************************************/
// =============================================================================