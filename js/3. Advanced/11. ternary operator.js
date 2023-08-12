
// ternary operator

/* we use ternary operator to choose one of two options depending on a condition

   condition ? option 1 : option 2

      if the conditon is true then will executes option 1
      if the conditon is false then will ececutes option 2   */

// we have en if-else statment here
const exerciseTimeMins = 20
let message = ''

if (exerciseTimeMins < 30) {
   message = 'You need to try harder!'
}
else {
   message = 'Doing good!'
}

console.log(message)
// -> 'You need to try harder!'


// if there is only 2 options we usually use ternary operator insted of if-else
const message = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!'

console.log(message)
// -> 'You need to try harder!'

// --------------------------------------------------------------------------------

// more than 2 options

const playerGuess = 6
const correctAnswer = 6

let message = ''

if (playerGuess < correctAnswer) {
   message = 'Too low!'
} eslse if (playerGuess > correctAnswer) {
   message = 'Too high!'
} else {
   message = 'Exactly right!'
}

// writing it with ternary operator
const message = playerGuess < correctAnswer ? 'Too low!'
   : playerGuess > correctAnswer ? 'Too high!'
      : 'Exactly right!'

console.log(message)

// usually we don't use ternary operator if there is more than one condition

// --------------------------------------------------------------------------------

// more than 1 condition

const endMessage = orc.dead && wizard.dead ? "No victors - all creatures are dead"
   : wizard.dead ? "The Orc is Victorious"
      : "The Wizard Wins"

// --------------------------------------------------------------------------------

// ternary operator with return
function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   // ******  return need to write before the condition
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

// --------------------------------------------------------------------------------