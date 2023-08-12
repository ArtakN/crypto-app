/*
   element.attribute
      "style" attribute
      "disabled" attribute
*/

// =========================================================================
/* To change the value of an HTML element attribute using JS syntax, we need 
   to first take control of the element's attribute and then change its value   */

// at first we get control of an element
const element = document.getElementByID("element")

// then we get control of the element attribute
element.attributeName

// and now we can change the value fo the element attribute
element.arrtributeName = "new value"
// =========================================================================

// =========================================================================
/* change elements style with JS syntexis
 
   style is an element attribute, so first we get control of the style 
   attribute and then we can change any property.

   syntexes:
      element.style.property = "value"    */

const answerEl = document.getElementById('answer')

// when the button is clicked
document.getElementById('reveal-btn').addEventListener('click', function () {

   // we will change the "answer" container background color
   answerEl.style.background = "#68e1fd"

   // by the same way we will change another element attributes

   // show the answer container by giving the answer container display: block
   answerEl.style.display = "block"

   // and hide the button
   revealBtn.style.display = "none"

})

// -------------------------------------------------------------------------

// ***** if the style property consist of 2 words, we need to use camelCase 
answerEl.style.backgroundColor = "#68e1fd"
// =========================================================================

// =========================================================================
// disabling elements with JS syntexis

/* for example we need to disable a decrement button when a quantity is 
   less or equal 0.

      <button class="quantityBtn" id="decrement">-</button>    */

// here we get control of the elements
const quantity = document.getElementById('product-quantity')
const decrement = document.getElementById('decrement')

// on every decrement button click
decrement.addEventListener('click', function () {

   // quantity will increase by 1
   quantity--

   /* as soon as quantity === 0, we will add an diasbled attribute to the 
      element and set its value to true to disable the button */
   if (quantity === 0) {
      decrement.disabled = true
   }
})
// =========================================================================

// =========================================================================
// hide elemetn
// =========================================================================