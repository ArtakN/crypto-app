// ======================================================================
// .includes() method is for checking if an array holds a given value

const emojis = ['🐥', '🐯', '🐼']

// does the emojis array includes '🐥' emoji?
console.log(emojis.includes('🐥'))
// if answer is yes so we will get - true, if not - false
// -> true

// ----------------------------------------------------------------------

// example

/* we are creating a function and in the fucntion we will iterate a 
   nested for of so that an emotion is only pushed to emotionsArray if 
   it is not already in emotionsArray.  */

function getEmotionsArray(cats) {

   const emotionsArray = []

   for (let cat of cats) {
      for (let emotion of cat.emotionTags) {

         // if is not included it will return false and !false is true 
         if (!emotionsArray.includes(emotion)) {
            emotionsArray.push(emotion)
         }
      }
   }
   return emotionsArray
}
// =======================================================================