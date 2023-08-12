// Method chaining - chaining 2 or more than methods

/* Chanange:
   Given the array below, chain the `.filter` and `.map` array methods together 
   to turn the array into an array of string email addresses of only the people 
   in the array who voted. Log the array of email addresses to the console    */

// Given the array 
const voters = [
   { name: "Joe", email: "joe@joe.com", voted: true },
   { name: "Jane", email: "jane@jane.com", voted: true },
   { name: "Bo", email: "bo@bo.com", voted: false },
   { name: "Bane", email: "bane@bane.com", voted: false }
]

/* chain the `.filter` and `.map` array methods together to turn the array into 
   a new array of string email addresses of only the people in the array who voted. */
const finalResult = voters.filter(voter => voter.voted).map(voter => voter.email)

/*******************************************************************************
 during chaining the second method get as an argument what returns the first method
 ******************************************************************************/

// so here the map() method as voter gets elements of the filtered array

// Log the array of email addresses to the console
console.log(finalResult)
// -> ["joe@joe.com", "jane@jane.com"]