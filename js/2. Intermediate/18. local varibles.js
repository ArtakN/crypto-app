// if we use a varible only in one function, it is better to create a local varible insted of a global

// for example here we create a new tweetInput verible 
const tweetInput = document.getElementById('tweet-input')

// and use this varible only in this function
function handleTweetBtnClick() {

   if (tweetInput.value) {
      tweetsData.unshift({
         handle: `@Scrimba`,
         profilePic: `images/scrimbalogo.png`,
         likes: 0,
         retweets: 0,
         tweetText: tweetInput.value,
         replies: [],
         isLiked: false,
         isRetweeted: false,
         uuid: uuidv4()
      })
      render()
      tweetInput.value = ''
   }

}

// so in this case it is better to create this varible localy - in the function
function handleTweetBtnClick() {

   const tweetInput = document.getElementById('tweet-input')

   if (tweetInput.value) {
      tweetsData.unshift({
         handle: `@Scrimba`,
         profilePic: `images/scrimbalogo.png`,
         likes: 0,
         retweets: 0,
         tweetText: tweetInput.value,
         replies: [],
         isLiked: false,
         isRetweeted: false,
         uuid: uuidv4()
      })
      render()
      tweetInput.value = ''
   }

}