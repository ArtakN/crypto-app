
// a constructor for creating arrays

// ======================================================================
// we need to create an array with length 10 undefindes elements
const endOfLevelBosses = []

// we can do it with for loop
for (let i = 0; i < 10; i++) {
   // 10 times push undefined to the array
   endOfLevelBosses.push(undefined)
}

console.log(endOfLevelBosses)
// -> [undefined, undefined ...]

// ----------------------------------------------------------------------

// with array constructor we can do it with more cliner code
const bosses = new Array(10)

console.log(endOfLevelBosses)
// -> [empty x 10]   -we will get an array with 10 empty elements

new Array(10).fill()
// -> [undefined, undefined ...]   -we will get an array with 10 undefineds

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

// *** we can create the same without using "new"
const endOfLevelBosses = Array(10)

console.log(endOfLevelBosses)
// -> [empty x 10]   -we will get an array with 10 empty elements
// ----------------------------------------------------------------------


// ----------------------------------------------------------------------