/*
   setTimeout()
   current time
   setInterval()
*/

// ==============================================================================
// setTimeout() - to run a function after some time

// here can be any function -    in-line, arrow, callback
setTimeout(function () { }, delay)
// delay is exprecing the number of ms (1s = 1000ms)

// ----------------------------------------------------------------------------

// for example in 1.5 sec render a text
setTimeout(function () {

   document.getElementById('upload-text').innerText = `Making the sale...`

}, 1500)

// ----------------------------------------------------------------------------

// using callback function

/* we create a function seperatly then use it in setTimeout() as a 
   callback function */
setTimeout(newText, 1500)

function newText() {
   document.getElementById('upload-text').innerText = `Making the sale...`
}

// ----------------------------------------------------------------------------

// using arrow function

const question = 'What is the capital of Peru?'

setTimeout(() => { console.log(question) }, 3000)
// ============================================================================

// ============================================================================
// current time

/* to answer the questions like how to show local time we need to search in 
   google, stackoverflow and read documentation   */

// Display the current time on the page
const date = new Date()
document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "medium" })
// there are  tymestiles - short (hours, minutes), medium (show seconds), long
// ============================================================================

// ============================================================================
// setInerval() - to update a function in interval

// function will be updated every 3s, 
setInterval(function () { }, 3000)
// here can be any function -  in-line, arrow, callback

//  Example: we need to update the current time every second

// 1. we create a function that renders current time in the page
function getCurrentTime() {
   const date = new Date()
   document.getElementById("time").textContent = date
      .toLocaleTimeString("en-us", { timeStyle: "short" })
}

// 2. we update it every second
setInterval(getCurrentTime, 1000);
// -> time updates every second
// ============================================================================