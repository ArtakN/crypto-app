// =============================================================================
// asyncronous means that it is happening out of order

console.log("The 1st console log")

fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => response.json())
   .then(data => console.log(data))

console.log("The 2nd console log")

/* on console we will get first and second console log
   and only then we will get the data  */

// -›The 1st console log
// -›The 2nd console log
// -›{message: "https://images.dog.ceo/breeds/affenpinscher/n02110627_12003.jpg", status: "success"}

/* This is the beauty of asyncronous javascript, 
   asyncronous just means that it is happening out of order
   the beaty of the .then() blocks is that they don't block
   the other code in js program from running. They allowed 
   second console log to run before the response from the fetch
   requeest ever came back from the server.
   
   There can be not only one console log, even 100 console logs 
   will run before the fetch request get the response from the server.  */
// =============================================================================

// =============================================================================
/* Syncronous JS

   Each command must complete before the next command can execute
   No two commands can be ranning at the same time as each other
 
Asyncronous JS

   Code that can run out of order. Allows a lengthy operation to
   start, but finish at a later time without blocking other code
   from running in the meantime.
   
Why Asyncronous?
 
   JS isn't truly asyncronous, but rather has "callback" mechanisms
   in place to run commands in a different order to make things 
   more efficinet.
   
   "Single-threaded" means only one command can run at a time. */

// Learn Asyncronous JS (MDN)
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
// =============================================================================
