/* 
   Strings
      concatenate strings
      strings vs numbers
      emoji
*/
// =============================================================================
// concatenate strings

let username = "rox"
let message = "You have three new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)
// returns: You have tree new notifications, rox!

// =============================================================================

// =============================================================================
// Strings vs Numbers

// string always wins
let name = 42
let greeting = "Hi, my name is "

let myGreeting = greeting + name

console.log(myGreeting)
//  "Hi, my name is 42"   (string)

let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints)
//  returns:   "410"  (string)
// =============================================================================

// =============================================================================
// emoji is a string, too. It rendered a little bit fancy.

let name = "Artak Navoyan"
let greeting = "Welcome back " + "👋"

console(welcomeEl)
// "Artak Navoyan Welcome back 👋"
// =============================================================================