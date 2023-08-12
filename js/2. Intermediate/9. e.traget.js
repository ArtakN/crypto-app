// we get control of the container element 
const container = document.getElementById('container')

// here we have some products in products array
const products = [
   {
      name: 'Ostrich Pillow',
      price: '10',
      image: 'ostrichpillow.jpg',
      id: 'ostrich-pillow'
   },
   {
      name: 'Bacon Bandages',
      price: '8',
      image: 'bacon-bandage.jpg',
      id: 'bacon-bandages'
   },
   {
      name: 'Baby Mop',
      price: '20',
      image: 'babymop.jpg',
      id: 'baby-mop'
   }
]

// we created a varible that will contain product elements
let productsHtml = ''

// here we interact every product 
for (let product of products) {
   productsHtml += `
    <div class="product">
        <h3>${product.name}</h3>
         <h4> £${product.price}</h4>
        <img src="${product.image}">
        <button id="${product.id}">Buy Now</button>
    </div>
    `
}

// and add products element to the container in the document
container.innerHTML = productsHtml

/*** but here we have a problem, we can see that we have a "Buy now" button in every product
     but it is not working, because there is no an event listener on it, 
     there is a big question how we need to add an event listener on each button.  

     we will solve this problem with event (e), we pass event as an parameter to
     the function. 
     What is an event. it is any kind of interaction in the browser - click, doubleclick, scroll,
     so event is available in this e parameter. if we log out event, we will get   */
container.addEventListener('click', function (e) {
   console.log(e)
})
/* -> PointerEvent {isTrusted: true} , this is a big object , and if we open the full event 
      we will see a trget, target shows where is the event came from. 

         trget: button#ostrick-pillow        #ostrick-pillow is the id of the button element, 
                                              it comes from the products data, id property of 
         each product if we click on the target in console we will get full information of the 
         target. and there we can fined  -  id: "ostrick-pillow"  */

// so here we will log out the id of the clicked button
container.addEventListener('click', function (e) {
   console.log(e.target.id)
})
/* -> and if we click the first button we will get the first product id - 'ostrich-pillow',
      if we click the second button we will get the second product id - 'bacon-bandages'
      if we click the tirth button we will get the tirth product id - 'baby-mop'

      if now we will click any other element in the document aside buttons, we will get "",
      because the other elements haven't id, if we set id to any element and then click on
      it, we will get it's id.   */

// ------------------------------------------------------------------------------------------------

// .parent element

// but what if after clicking this button, we need to do something with the product card
container.addEventListener('click', function (e) {

   // here we get control to the parent element of the button element (product card) 
   // and now we can interact with it
   console.log(document.getElementById(e.target.id.parentElement))
   // -> <div class="product">

   /* 
      for example we want to change the background color of the card to lightblue 

      document.getElementById(e.target.id).parentElement.style.backgroundColor = 'lightblue'
   */
})

// ------------------------------------------------------------------------------------------------
// add event listener to radio inputes

// here we get a control of the radio inputes container
const emotionRadios = document.getElementById('emotion-radios')

// here we add an event listener to the radio inputs contianer, it will track events inside this container
// for radio buttons we use 'change' event, not 'click'
emotionRadios.addEventListener('change', function (e) {

   // we will get id of the changed (clicked) radio input
   console.log(e.target.id)
})
// ==============================================================================================

// ==============================================================================================
// *** other example (at first read lessson 29. data attribute.js)

import { tweetsData } from './data.js'

/* we created an event listener here, it is listening for the clicks anywhere of the document 
   and with if-else we figure out which icon was clicked */
document.addEventListener('click', function (e) {

   /* here we check if the data attribute's value of the targeted (clicked) icon is similar 
      with the data attribut's value of the retweet icon (if we clicked the retweet icon) */
   if (e.target.dataset.retweet) {
      // then we call handleRetweetClick() function and pass in it the value of that data attribute
      handleRetweetClick(e.target.dataset.retweet)
   }

   // if the targeted icon attribute value is e.target.dataset.like (if we clicked the like icon)
   else if (e.target.dataset.like) {
      // then we call handleLikeClick() and pass in it attribute value
      handleLikeClick(e.target.dataset.like)
   }

   // if the targetes icon data attribute value is similar with the value of reply icon attribute value
   else if (e.target.dataset.reply) {
      // call handleReplyClick() function and pass in it reply icon data attribute value
      handleReplyClick(e.target.dataset.reply)
   }

   // if the targeted button id === 'tweet-btn' (it means the Tweet button was clicked)
   else if (e.target.id === 'tweet-btn') {
      // call handleTweetBtnClick() function
      handleTweetBtnClick()
   }
})


function handleRetweetClick(tweetId) {

   /* Find the retweeted tweet's object in tweetsData and save it to a const
      with filter() method we check the tweetsData array */
   const targetTweetObj = tweetsData.filter(function (tweet) {
      // and return a tweet with necessary uuid 
      return tweet.uuid === tweetId
   })[0]
   // as we know filter() method returns an array, so we get the element with 0 index

   // If the isRetweeted's value of the tweet is true - so it is clicked
   if (targetTweetObj.isRetweeted) {
      // then we need to decrement after new click on this icon
      targetTweetObj.retweets--

      // if it is not clicked - so it is false
   } else {
      // we need to increment after click
      targetTweetObj.retweets++
   }

   // we need to flip the value of isRetweeted   true-false
   targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

   // Call the render function
   render()
}


function handleLikeClick(tweetId) {

   const targetTweetObj = tweetsData.filter(function (tweet) {
      return tweet.uuid === tweetId
   })[0]

   if (targetTweetObj.isLiked) {
      targetTweetObj.likes--
   }
   else {
      targetTweetObj.likes++
   }

   targetTweetObj.isLiked = !targetTweetObj.isLiked

   render()
}


function handleReplyClick(replyId) {
   /* 1. Use the uuid stored in 'replyId' to take control of the div containing that tweet’s replies. 
         (Check the HTML string below to remind yourself what id that div will have.)  
      2.Toggle the CSS class "hidden" on that div. */
   document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}


function handleTweetBtnClick() {
   console.log(tweetInput.value)
}


function getFeedHtml() {
   let feedHtml = ``

   tweetsData.forEach(function (tweet) {

      let likeIconClass = ''

      if (tweet.isLiked) {
         likeIconClass = 'liked'
      }

      let retweetIconClass = ''

      if (tweet.isRetweeted) {
         retweetIconClass = 'retweeted'
      }

      let repliesHtml = ''

      if (tweet.replies.length > 0) {
         tweet.replies.forEach(function (reply) {
            repliesHtml += `
                           <div class="tweet-reply">
                              <div class="tweet-inner">
                                    <img src="${reply.profilePic}" class="profile-pic">
                                    <div>
                                        <p class="handle">${reply.handle}</p>
                                        <p class="tweet-text">${reply.tweetText}</p>
                                    </div>
                              </div>
                           </div>
                           `
         })
      }

      feedHtml += `
         <div class="tweet">
            <div class="tweet-inner">
               <img src="${tweet.profilePic}" class="profile-pic">
               <div>
                  <p class="handle">${tweet.handle}</p>
                  <p class="tweet-text">${tweet.tweetText}</p>
                  <div class="tweet-details">
                        <span class="tweet-detail">
                           <i class="fa-regular fa-comment-dots"
                           data-reply="${tweet.uuid}"
                           ></i>
                           ${tweet.replies.length}
                        </span>
                        <span class="tweet-detail">
                           <i class="fa-solid fa-heart"
                           data-like="${tweet.uuid}"
                           ></i>
                           ${tweet.likes}
                        </span>
                        <span class="tweet-detail">
                           <i class="fa-solid fa-retweet"
                           data-retweet="${tweet.uuid}"
                           ></i>
                           ${tweet.retweets}
                        </span>
                  </div>   
               </div>            
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
               ${repliesHtml}
            </div>   
         </div>
         `
   })
   return feedHtml
}

// we creted tweeters render function
function render() {
   document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
// ==============================================================================================