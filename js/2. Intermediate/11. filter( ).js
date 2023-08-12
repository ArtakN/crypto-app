
// array's method .filter(function(){})

// ===============================================================================
/* sometimes we need to go through an array and get exactly what we want.
   we can do it with method .filter()
   
   for example here we need to go through the ages array and check all elements
   and if the element is above 18, we will take and pass it to a new array  */
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

// age is every element of the ages array
const adults = ages.filter(function (age) {

   // if the element is above 18, it will return true
   if (age >= 18) {
      return true
   }
})

// all the elements of adults array are >= 18
console.log(adults)
// -> [23, 56, 47, 70, 19, 23, 18]

// ----------------------------------------------------------------------------

// we can refactor the code and write it in 1 line code 
const children = ages.filter(function (age) {
   return age < 18
})

console.log(children)
// -> [1, 5, 9, 10, 10]
// =====================================================================================

// =====================================================================================
// get nested properties

// for example we have an array of objects
const series = [
   {
      name: 'The Wire',
      location: 'Baltimore',
      lengthInHours: 60,
      genres: ['action', 'thriller', 'detective', 'suspense']
   },
   {
      name: 'Game of Thromes',
      location: 'Westeros and Essos',
      lengthInHours: 70.25,
      genres: ['fantasy', 'action', 'tragedy']
   },
   {
      name: 'Friends',
      location: 'New York',
      lengthInHours: 85,
      genres: ['comedy', 'romance', 'drama']
   }
]

/* we need to go throuh the series array and get the element with 'New York' 
   location in a new array  */
const newYorkSeries = series.filter(function (show) {
   return show.location === 'New York'
})

// we will get a new newYorkSeries array with the one element (object) inside
console.log(newYorkSeries)
// [{name: "Friends", location: "New York", lengthInHours: 85, genres: ["comedy", "romance", "drama"]}]

// -------------------------------------------------------------------------------------

// Use the.filter() method to create an array of all of the thrillers .includes('romance')

const thrillers = series.filter(function (show) {
   return show.genres.includes('thriller')
})

console.log(thrillers)
/* -> [{name: "The Wire", location: "Baltimore", lengthInHours: 60, genres: ["action",
      "thriller", "detective", "suspense"]}, {name: "The Walking Dead", location: "Atlanta",
      lengthInHours: 131, genres: ["zombie", "apocalypse", "thriller", "suspense"]}]   */
// =====================================================================================

// =====================================================================================
/* the function inside filter method except array element can get more 2 optional 
   parrameters - index of every element, and the array then can do some manipulations 
   with them  */
const peopleWithPets = people.filter((person, index, array) => {

})
// =====================================================================================

// =====================================================================================
// fined a tweet object - tweeter clone lesson 19
function handleLikeClick(tweetId) {

   /*
   Challenge:
   1. Iterate over tweetsData and use the uuid 
     saved in tweetId to identify the liked
     tweet's object. Save that object to a 
     new const called 'targetTweetObj'.
   ⚠️ targetTweetObj should hold an object, NOT
     an array.
   2. Increment targetTweetObj's 'likes' count 
     by 1.
   3. Render increment  */

   const targetTweetObj = tweetsData.filter(function (tweet) {
      return tweet.uuid === tweetId
   })[0]
   render()
}

function render() {
   document.getElementById('feed').innerHTML = getFeedHtml()
}
// =====================================================================================