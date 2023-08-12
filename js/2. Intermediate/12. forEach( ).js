
/*
   for each
      iterate array
      iterate nested arrray
      second parameter
*/

// ========================================================================
// forEach() - a method for iterating over arrays

const characters = [
   {
      title: 'Ninja',
      emoji: '🥷',
      powers: ['agility', 'stealth', 'aggression'],
   },
   {
      title: 'Sorcerer',
      emoji: '🧙',
      powers: ['magic', 'invisibility', 'necromancy'],
   },
   {
      title: 'Ogre',
      emoji: '👹',
      powers: ['power', 'stamina', 'shapeshifting'],
   },
   {
      title: 'Unicorn',
      emoji: '🦄',
      powers: ['flight', 'power', 'purity'],
   }
]

// we need to iterate each element of the array

/* we know how to do it with 'for of'

   for (let character of characters){
      console.log(character)
   }                                */


// we can do the same with .forEach() method

// in .forEach() metod we write a function and pass in it a parameter 
// the parameter is every element of the array - we can write here any name
characters.forEach(function (character) {
   console.log(character)
   // -> we get each element (object) of the characters array in the console
})

// ------------------------------------------------------------------------

// to get an individual property of each character
characters.forEach(function (character) {
   console.log(character.powers)
   // -> we get each title powers in the console - powers are arraies
})

// what we have to do if we want to access every individual element in the nested array

// we get each character
characters.forEach(function (character) {
   // we create one more 'forEach' and get each nested element of the nested power array
   character.powers.forEach(function (power) {
      console.log(power)
   })
})

// ------------------------------------------------------------------------

// second parameter - index

/* in the function we can pass index as second parameter 
   it is index of each element of the array */
characters.forEach(function (character, index) {
   // we want to get each index and title property of that index element
   console.log(index, character.title)
   /* 
      0,"Ninja"
      1,"Sorcerer"
      2,"Ogre"
      3,"Unicorn"
   */
})
// ========================================================================

// ========================================================================
// we create a function 
function getFeedHtml() {
   let feedHtml = ``
   // that will itarate each tweet from tweetsData array by forEach() method
   tweetsData.forEach(function (tweet) {
      // and create feeds with each element in this data 
      feedHtml += `
                  <div class="tweet">
                      <div class="tweet-inner">
                          <img src="${tweet.profilePic}" class="profile-pic">
                          <div>
                              <p class="handle">${tweet.handle}</p>
                              <p class="tweet-text">${tweet.tweetText}</p>
                              <div class="tweet-details">
                                  <span class="tweet-detail">
                                      ${tweet.replies.length}
                                  </span>
                                  <span class="tweet-detail">
                                      ${tweet.likes}
                                  </span>
                                  <span class="tweet-detail">
                                      ${tweet.retweets}
                                  </span>
                              </div>   
                          </div>            
                      </div>
                  </div>
                  `
   })
   // return all feeds
   return feedHtml
}

// create a new functoin that will render the feeds
function render() {
   // pass each feed to the feed container in the document
   document.getElementById('feed').innerHTML = getFeedHtml()
}

// call the render funtion
render()
// ========================================================================

