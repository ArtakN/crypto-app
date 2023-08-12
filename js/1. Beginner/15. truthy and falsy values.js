// =============================================================================
/* falsy values is values that return false

   false
   0
   ""
   null           -> how you as a developer signalize emptiness
   undefined      -> how JavaScript signalizes emptiness
   NaN               
*/
// =============================================================================

// =============================================================================
// truthy values

/* any other values are truty, because returns false

      true
      []
      {}
      any number, other than 0
      any symbol
      ...            */
// =============================================================================

// =============================================================================
// if we want to know is a value truthy or falsy, we can check it with Boolean()

// string "hello" we convert to boolean
let trueOrFalse = Boolean("hello")
console.log(trueOrFalse)
// --> true

// empty string convert to boolean
trueOrFalse = Boolean("")
console.log(trueOrFalse)
// --> false
// =============================================================================

// =============================================================================
// nonexisting elemnt of an obect or array is false

const newArray = [1, 2, 3]

// elemnt of newArray on5th index returns
console.log(Boolean(newArray[5]))
// -> false

// because
console.log(newArray[5])
// -> undefined

// undefined is false
// =============================================================================
