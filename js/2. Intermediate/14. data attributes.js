// Data Attributes is a way of storing extra information in HTML elements

/* For example we have images on our page and each image has a like icon
   and a share icon. We need a way to know that icons under that iamge related to
   that img. if we look at the html we can see that each iamge is in a container
   and there is a nested container for the icons. the image has an id so when we 
   comes to make clear that these 2 icons belongs to this iamge, we can take the 
   iamge id and use as id for these icons, but there is a big problem because 
   as we know id have to be unic and using an id multiple time can cause a ton 
   of problems. 

      <div class="img-container">
         <img src="dino2.jpeg"
          alt="Man in front of dinosaur"
          id="image-1">
         <div class="social-icons-container">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-share"></i>
         </div>
      </div> 

   so what we really need is a way of storing some info inside this element that 
   says this icons belong to this image. Data Attributes allow us to do exactly that.

   data attribute syntex

      data-uniquename = "our data"
   
   example:

      <img class="img-large" data-size="2650*2650">

   size is the name of the data attribute

   so we will use data attributes in our html and value for data atrtributes we will
   use the same of iamge id:

    <div class="img-container">
         <img src="dino2.jpeg"
          alt="Man in front of dinosaur"
          id="image-1">
         <div class="social-icons-container">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-share" data-share="image-1"></i>
         </div>
      </div> 

   we created an data-share attribute in the share icon element that holds a 
   value same of image id (imeage-1)  

// -----------------------------------------------------------------------------

// now we need to get data attribute value of the icon after click on it.
   we can fined it in event->target->dataset   

document.addEventListener('click', function (e) {
   console.log(e.target.dataset)
   // -> DOMStringMap {share: "image-1"}  - we get an object
}) 

// to get the value of the share property we need to go
   event->target->dataset->share    */
document.addEventListener('click', function (e) {
   console.log(e.target.dataset.share)
   // -> "image-1"
})

/*** if we click anywhere on the page we will get undefined, because the data
attribue with the name share only exist in the share icon  */

// we write a conditon and 
document.addEventListener('click', function (e) {
   // if on the click the icon has share value in the data attribute 
   if (e.target.dataset.share) {
      // log out the value
      console.log(e.target.dataset.share)
   }
   // if the data attribute contains heart value
   else if (e.target.dataset.heart) {
      // log out that
      console.log(e.target.dataset.heart)
   }
})
// ============================================================================

// ============================================================================
/* data attributes naming problems

      1.don't use uppercase letters when naming data attributes in HTML

         <i class="fa-solid fa-share" data-shareIcon="image-1"></i>

      because js takes data attributes names from the html and changes to the 
      lowercase

      2. we need to use dashes instead of camelcase

         <i class="fa-solid fa-share" data-share-icon="image-1"></i>

      but in the js we will get an error, because js takes dashes and change it
      to uppercase. so the best way is to use dashes in the HTML and use camel
      case in the js     
      
      HTML:
      <i class="fa-solid fa-share" data-share-icon="image-1"></i>
      
      JS: */
document.addEventListener('click', function (e) {
   if (e.target.dataset.shareIcon) {
      console.log(e.target.dataset.shareIcon)
   }
   else if (e.target.dataset.heartIcon) {
      console.log(e.target.dataset.heartIcon)
   }
})
// ============================================================================

// ============================================================================
// now we can use data attributes for the icons and give them uuid from the data.js
import { tweetsData } from './data.js'

/* When a like icon is clicked, this function should log 
   out the contents of the 'data-like' data-attribute. */
document.addEventListener('click', function (e) {
   console.log('like', e.target.dataset.like)
   console.log('retweet', e.target.dataset.retweet)
})

function getFeedHtml() {
   let feedHtml = ``
   /*
   Challenge:
   1. In HTML doc add data attributes to each of the  <i> tags. 
      You can call them 'reply', 'like', and 'retweet’.
   2. Each data attribute should hold the tweet's uuid.
   */

   tweetsData.forEach(function (tweet) {
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
               </div>
               `
   })
   return feedHtml
}

function render() {
   document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
// ============================================================================