// constructor functions - tamplates for objects

// a template for creating multiple objects with the same attributes

/* as we know, in JS, functions are objects, it means that
   they can have propeties just like the regular objects  */
function Animal() {
   // inside the body of the function we are going to write some properties
   // we are going to use 'this' keyword, it is the object
   this.species = 'tiger'
   this.weightKg = 56
   this.age = 2
}

/* it means that animal1 is a new instance of animal
   we juxt use the 'new' keyword to tell the JS to create 
   a new object, and now 'this' refers to that new object   */
const animal1 = new Animal

console.log(animal1)
// -> Animal {species: "tiger", weightKg: 56, age: 2}

// ----------------------------------------------------------------------

// in above is a hard-coded axample but we need something flexible

// we have 2 objects of data
const animalForRelease1 = {
   name: 'Tilly',
   species: 'tiger',
   weightKg: 56,
   age: 2,
   dateOfRelease: '03-02-2022'
}

const animalForRelease2 = {
   name: 'Nelly',
   species: 'elephant',
   weightKg: 320,
   age: 16,
   dateOfRelease: '03-02-2022'
}

/* insted of hard-coded, we pass inside the constructor a parameter - data object, 
   and for each of properties we are going to set up this.   */
function Animal(data) {
   this.name = data.name
   this.species = data.species
   this.weightKg = data.weightKg
   this.age = data.age
   this.dateOfRelease = data.dateOfRelease
}

// and now we will create 2 new instance of Animal
const tigerTilly = new Animal(animalForRelease1)
const elephantBin = new Animal(animalForRelease2)

console.log(tigerTilly)
// -> Animal { name: "Tilly", species: "tiger", weightKg: 56, age: 2, dateOfRelease: "03-02-2022" }
console.log(elephantBin)
// -> Animal {name: "Nelly", species: "elephant", weightKg: 320, age: 16, dateOfRelease: "03-02-2022"}

// ----------------------------------------------------------------------

/* mthods of constructor functions
   
      -methods are the properties of objects that contain functions  
      -if you can write a function, you can write a method  */

function Animal(data) {
   this.name = data.name
   this.species = data.species
   this.weightKg = data.weightKg
   this.age = data.age
   this.dateOfRelease = data.dateOfRelease
   // we use ananimous function to create a method (ananimous - without name)
   this.summariseAnimal = function () {
      console.log(`${this.name} is a ${this.age} year old ${this.species} which weighs 
      ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`)
   }
}

// and we can call the method
tigerTilly.summariseAnimal()
// -> Tilly is a 2 year old tiger which weighs 56kg and was released into the wild on 03-02-2022

// =============================================================================

// =============================================================================

function Character(data) {
   this.elementId = data.elementId;
   this.name = data.name;
   this.avatar = data.avatar;
   this.health = data.health;
   this.diceCount = data.diceCount;

   this.getCharacterHtml = function () {
      // this is how we can desturucturing objects in constructor function
      const { elementId, name, avatar, health, diceCount } = this;

      const diceHtml = getDiceHtml(diceCount)

      document.getElementById(elementId).innerHTML =
         `<div class="character-card">
           <h4 class="name"> ${name} </h4>
           <img class="avatar" src="${avatar}" />
           <div class="health">health: <b> ${health} </b></div>
           <div class="dice-container">    
               ${diceHtml}
           </div>
       </div>`;

   }

}

// this is the same instance without desturucturing
function Character(data) {
   this.elementId = data.elementId;
   this.name = data.name;
   this.avatar = data.avatar;
   this.health = data.health;
   this.diceCount = data.diceCount;

   this.getDiceRollArray = function () {

      const diceHtml = getDiceHtml(this.diceCount)

      document.getElementById(this.elementId).innerHTML =
         `<div class="character-card">
               <h4 class="name"> ${this.name} </h4>
               <img class="avatar" src="${this.avatar}" />
               <div class="health">health: <b> ${this.health} </b></div>
               <div class="dice-container">    
                   ${diceHtml}
               </div>
           </div>`;
   }
}
// =============================================================================

// =============================================================================
// problem in the constructor funtion

// updating the DOM by innerHtml is not the constructor function's job

function Character(data) {
   this.elementId = data.elementId;
   this.name = data.name;
   this.avatar = data.avatar;
   this.health = data.health;
   this.diceCount = data.diceCount;

   this.getDiceHtml = function (diceCount) {
      return getDiceRollArray(diceCount).map(function (num) {
         return `<div class="dice">${num}</div>`
      }).join('')
   }

   this.getDiceRollArray = function () {

      const diceHtml = getDiceHtml(this.diceCount)

      /* so we will return the literal string of HTML
         insted of updating the DOM by innerHtml   */
      return `<div class="character-card">
               <h4 class="name"> ${this.name} </h4>
               <img class="avatar" src="${this.avatar}" />
               <div class="health">health: <b> ${this.health} </b></div>
               <div class="dice-container">    
                   ${diceHtml}
               </div>
           </div>`;
   }
}

// and then use innerHtml here to render it
const wizard = new Character(hero)
document.getElementById(hero.elementId).innerHTML = wizard.getCharacterHtml()
// =============================================================================