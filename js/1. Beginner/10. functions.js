/* 
   functions
      return
      parameters & arguments
      universal, reusable functions
*/
// =====================================================================
// Returning values in functions

// If a function need to returt any value then we need to use `return` 
let a = 102
let b = 102

function sum(a, b) {
   return a + b
}

console.log(sum)
// if we don't use return in this function, we will get undefined here

// ----------------------------------------------------------------------

// Make a function that returns a random number between 1 and 10

function getRandomCard() {
   return Math.floor(Math.random() * 10) + 1
}
// ======================================================================

// ======================================================================
// function parameters and arguments

// parameters are varibles that we define when we write a function 

//                   parameters
function greetUser(greeting, name) {
   welcomeEl.textContent = `${greeting}, ${name} 👋`
}


// arguments are values that we pass in the function when we call it 

//            arguments
greetUser("Howdy", "James")
// ======================================================================

// ======================================================================
// How function parameters can improve the code

// Here we have a function that renders `myLeads` array in a list

let myLeads = []

function renderLeads() {

   // default value
   let listItems = ""

   for (let i = 0; i < myLeads.length; i++) {
      listItems += `
           <li>
               <a target='_blank' href='${myLeads[i]}'>
                   ${myLeads[i]}
               </a>
           </li>
       `
   }
}

renderLeads()

/* But if we change the array name - it will not render it anymore, 
   we have to create another render function if we want to render another array. 

   This is not correct, we always need try to create uiversal and reuseble functions. 
   We can do it with function parameters. 

   Let's refactor the function, 
   it wiil accept an array as a parameter, and render it in a list.  */
function render(array) {
   let listItems = ""
   for (let i = 0; i < array.length; i++) {
      listItems += `
              <li>
                  <a target='_blank' href='${array[i]}'>
                      ${array[i]}
                  </a>
              </li>
          `
   }
}

// to render an array, we call the render() function and pass there any array
render(myLeads)
// ================================================================================