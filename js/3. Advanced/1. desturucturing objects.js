/* 
   object destructuring - an easier way to extract data from objects
*/

// =====================================================================
// we have an object and we want to extract some data from it
const favouriteFilm = {
   title: "Top Gun",
   year: "1986",
   genre: "action",
   star: "Tom Cruise",
   director: "Tony Scott"
}

// we can do it by creating a lot of varibles 
const title = favouriteFilm.title
const year = favouriteFilm.year
const genre = favouriteFilm.genre
const star = favouriteFilm.star
const director = favouriteFilm.director

// and then use them
console.log(`My favourite film is ${title} starring ${star}. 
                It's an ${genre} film that was released in ${year}`)

// if the object has not 5 but 50 properties it becomes very uncomfort way 

// there is a new way to destructure an object:
const { title, year, genre, star, director } = favouriteFilm
//  we will always use this type of destructuration

// so we created 5 varibles with 1 const, and now we can use them
console.log(`My favourite film is ${title} starring ${star}.
            It's an ${genre} film that was released in ${year}`)

// ----------------------------------------------------------------------------

// we don't have to list all properties, we need to write only properties that we will use
const { title, genre, star, year } = favouriteFilm

/* we have 5 properties in the object, but we created 4 varibles, 
   because here we need only these 4 varibles   */
console.log(`My favourite film is ${title} starring ${star}.
            It's an ${genre} film that was released in ${year}`)

// ----------------------------------------------------------------------------
// real example of use

// we have 2 objects
const hero = {
   elementId: "hero",
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceRoll: 3,
}

const monster = {
   elementId: "monster",
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceRoll: 4,
}

// we create a function that get an object as a parameter
function renderCharacter(data) {

   // at first we desturucturing the incoming object
   const { name, avatar, health, diceRoll } = data

   // then we use creted varibles (object properties)
   document.getElementById('elementId').innerHTML =
      `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">
               <div class="dice"> ${diceRoll} </div>
           </div>
       </div>`
}

// we call the  function and pass in it our objects as an argument
renderCharacter(hero)
renderCharacter(monster)
// =====================================================================