function handleLikeClick(tweetId) {
   const targetTweetObj = tweetsData.filter(function (tweet) {
      return tweet.uuid === tweetId
   })[0]

   /*
   Challenge:
   1. Delete the two lines of code marked below and
     replace them with just one line of code outside 
     of the if else.
     Hint: Google the logical NOT operator (!)
   */



   if (targetTweetObj.isLiked) {
      targetTweetObj.likes--
      targetTweetObj.isLiked = false // delete
   }
   else {
      targetTweetObj.likes++
      targetTweetObj.isLiked = true // delete  
   }

   render()
}


function handleLikeClick(tweetId) {
   const targetTweetObj = tweetsData.filter(function (tweet) {
      return tweet.uuid === tweetId
   })[0]

   // if isLiked is true 
   if (targetTweetObj.isLiked) {
      // after like icon click like counts will decrement
      targetTweetObj.likes--
   }
   // if it is false
   else {
      // likes count will increment
      targetTweetObj.likes++
   }

   // and here it will flips, if it is true it become false, and vice versa
   targetTweetObj.isLiked = !targetTweetObj.isLiked

   render()
}