/* Promise is a special object that considers to be one of 3 states

   1. Pending state
         -the promise has yet to be cpmpleted (it is in the process)
          when we write the fetch("") function, it take some time to
          get a response from the server after, we create a request

      from this pending state the promise can go one of 2 states

   2. Fullfilled (resolve) state
         -the promise was completed as promised
         
   3. Rejected state
         -the promise wasn't completed as promised    */

// ------------------------------------------------------------------------

// Promise Chaining

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")

// if we log out the fetch() functionwe will get Promise object
console.log(fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"))
// -> Promise {} 

// Promise is a special object

// it has .then() method which takes a callback function
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/").then(res => res.json())
// the callback function will run as soon as the promises become Fullfilled state

// it returns another Promise
console.log(fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/").then(res => res.json()))
// -> Promise {}

// we will use 2 .then() methods of the promise directly by chaining them to get the data
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/").then(res => res.json()).then(data => console.log(data))

// as soon as the promise becomes Fullfilled state
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      // the first .then() block will run, it will return another Promise
      .then(res => res.json())
      /* the second .then() block will run as soon as the second Promise become Fullfilled state, it will return another Promise   */
      .then(data => console.log(data))
// if then will be another .then() block, it will run after the 3rd promise become Fullfilled state
// =============================================================================

// =============================================================================
/* Rejected Promises

      A promise becomes rejected if an error is thrown inside any of the 
      .then() blocks or if a programmer manually calls Promise.reject().   */
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
      .then(res => res.json())
      .then(data => {
            console.log(data)
            throw Error("I'm an error!")
      })
      .catch(err => console.error(err))
/* here is a .catch() method that will only run if somewhere in our then blocks
   we have an error at programmer types Promise.reject()
   
   for better user experience we can do like this

      .catch(err => {
            textEl.textContent = "Something went wrong! 😭"
            document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-149?crop=80&w=1080)`
      })          
      
   every time when Promise rejects, the user will see another background image 
   and text.      */
// =============================================================================

// =============================================================================
// response status, response ok

fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
      .then(res => {
            // if response is not ok, it will return false
            if (!res.ok) {
                  // if response is not ok, we will throw an error and catch it et the end ->
                  throw Error("Something went wrong")
            }
            // we log out the respose status
            console.log(res.status)
            return res.json()
      })
      .then(data => {
            console.log(data)
      })
      // -> here we will catch that error with .catch() method
      .catch(err => console.error(err))
      /* if there is an error in the response then it will log out 
            
            "Error: Something went wrong"

         if there is no error, it will log out the status of the response and the data

            200
            {...}   */
// =============================================================================

// =============================================================================
/* Quiz

1. What is a promise (in your own words)?

      A promise is an operation that normally takes a bit of time will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?

      The fetch request returns a promise object.

3. What are the three states a promise can be in?

      (1) Pending, (2) Resolved (fulfilled), (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?

      The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a promise is resolved?

      with .then() method          */
// =============================================================================