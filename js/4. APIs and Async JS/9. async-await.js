/* Async/Await

      -introduced in ECMAScript 2017 (A.K.A. ES8)
      -make asyncronous code appear to be sycnronous
      -async keyword goes before the function (asyncronous function), and returns a promise
      -await keyword goes before a method/function that returns a promise 
      (await - wait for the response)

      ***await can't work without parent async function. 
         Only inside async function we can use awaits blocks.
*/

// that then syntex - as we see here 4 levels nested code
function handleClick() {
   fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then(res => res.json())
      .then(data => {
         remainingText.textContent = `Remaining cards: ${data.remaining}`
         deckId = data.deck_id
         console.log(deckId)
      })
}

// async/await syntex - here only 2 levels nested code
async function handleClick() {
   const res = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
   const data = await res.json()
   remainingText.textContent = `Remaining cards: ${data.remaining}`
   deckId = data.deck_id
   console.log(deckId)
}
/***we can use await only on first level childrens methods of async parent 
   function, if there is another function inside async fanction and we want to use await inside the children function we need to write async for children function, and then we can use inside children async function await functions.  */

// -----------------------------------------------------------------------------

// another example

// .then syntex
drawCardBtn.addEventListener("click", () => {
   fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json())
      .then(data => {
         remainingText.textContent = `Remaining cards: ${data.remaining}`
         cardsContainer.children[0].innerHTML = `
               <img src=${data.cards[0].image} class="card" />
           `
         cardsContainer.children[1].innerHTML = `
               <img src=${data.cards[1].image} class="card" />
           `
      })
})

// async/await syntex
drawCardBtn.addEventListener("click", async () => {
   const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
   const data = await res.json()
   remainingText.textContent = `Remaining cards: ${data.remaining}`
   cardsContainer.children[0].innerHTML = `
       <img src=${data.cards[0].image} class="card" />
   `
   cardsContainer.children[1].innerHTML = `
       <img src=${data.cards[1].image} class="card" />
   `
})