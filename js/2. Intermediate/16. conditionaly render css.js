

// giving elements different classes under different conditons

// =====================================================================================
// we have a retweet icon and we want it to become green after click, and back to white after second click

/* fot this in style css we created 2 new style 
   
      .liked {
         color: red;
      }    

      .shared{
         color: limegreen;
      }                       */

const galleryContainer = document.getElementById('gallery-container')

/*
Challenge:
1. Add functionality so that when a user 
   clicks the share icon it turns green. 
   Clicking it a second time should return 
   it to white.
*/

// here we creted 
let isLiked = false
let isShared = false

// we created an event listener that will listen any click in the document
document.addEventListener('click', function (e) {

   // if the targeted icons data attribute valu is similar with like icon value
   if (e.target.dataset.heart) {

      // then we flip is liked to false
      isLiked = !isLiked
      // call render fundtion
      render()
   }

   // if the targeted icons data attribute valu is similar with share icon value
   else if (e.target.dataset.share) {
      isShared = !isShared
      render()
   }
})

// we created render funton
function render() {

   // here are 2 varibles with empty string
   let heartClass = ''
   let shareClass = ''

   // if isLiked true
   if (isLiked) {
      // then we give heartClass liked class that we creted in the style.css
      heartClass = 'liked'
   } // if it is false it will contine to be an empty string

   if (isShared) {
      shareClass = 'shared'
   }

   let imageHtml = `
                <div id="image-1" class="img-container">
               <img src="dino2.jpeg" alt="Man in front of dinosaur">
               <div class="social-icons-container">
                  <i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
                  <i class="fa-solid fa-share ${shareClass}" data-share="image-1"></i>
               </div>
          `
   galleryContainer.innerHTML = imageHtml
}

render()
// =====================================================================================