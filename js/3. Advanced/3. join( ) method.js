// the .join() method - an inbuilt JS method for creating strings from arrays

/* what .join() method do?
   -Concatenates the elements of the array into a string
   -Let's you choose how the elements are separated
   -returns a new string  */

const cssClassesArray = ['btn', 'btn-primary', 'btn-active', 'btn-sidebar']

// if we dont pass any seperator to the join() method
const cssClassesString = cssClassesArray.join()

// we will get ',' between them
console.log(cssClassesString)
// -> btn,btn-primary,btn-active,btn-sidebarbtn,btn-primary,btn-active,btn-sidebar

// -------------------------------------------------------------------------------

// here we pass '.' as a seperator to the mthod
cssClassesString = cssClassesArray.join('.')

console.log(cssClassesString)
// -> btn.btn-primary.btn-active.btn-sidebar

// -------------------------------------------------------------------------------

// if we pass as a seperator just a space
cssClassesString = cssClassesArray.join(' ')

// we will get
console.log(cssClassesString)
// -> btn btn-primary btn-active btn-sidebar 

// -------------------------------------------------------------------------------

// if we pass empty string as a seperator
cssClassesString = cssClassesArray.join('')

// there will not be any seperator between the elements
console.log(cssClassesString)
// -> btnbtn-primarybtn-activebtn-sidebar
// ==============================================================================