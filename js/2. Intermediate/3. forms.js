/* 
   Validating and submitting form
      submitting form 
      e.preventDefault()
      get input value
      textarea value 
      radio button
      checkbox
*/

// ==============================================================================
// Submitting form

/* ***********************************************************************
   we add submit event listener to the form element and not to the button
   ***********************************************************************

   there are 2 ways to subbmit a form

      1. submit with an input - not a good way, because all info goes to the url

            <input type="submit">

      2. submit with a button - we allways will use this type
      
            <button type="submit">Submit</button>  */

// -----------------------------------------------------------------------------

/* any button inside the form will submit the form by default, and our event
   listener, which is listning out for submit event, will acts on ever of them.
   we will solve this problem to give the other buttons type="button", it will
   stop the default behavior.

      <form>
         <button type="submit">Submit</button>
         <button type="button">Cancel</button>
      </form>              */
// ==============================================================================

// ==============================================================================
// Prevent default behaviour - Предотвратить поведение по умолчанию

/* lets take a look how we can comprevent the strange behavor that happening
   default when we submit a form. When we fill the form and click submit then 
   the page refreshes, the form is cleared and the url gets a query string with 
   form data.
   
      /index.html?astronautName=Tom+Chant&astronautEmail=tom%40scrimba.com&
      astronautPassword=ghdhsjk
   
   here apears all the informaton from our form fields, even the password.
   so we defenetly need to stop this default behaivor.
   
   And we can do that with JS using .preventDefault() method of the event  */

// for this we need, at first, to get the form element from the document:
const loginForm = document.getElementById('login-form')

/* then we add a 'submit' event listener to this form element
   *****************************************************************************
   we add submit event listener to the form element and not to the button
   *****************************************************************************
   we will pass in this function parameter event - short e.
   event can be triggered any intraction on the page (clicking, scroling, 
   doubleclick, hovering etc)  */
loginForm.addEventListener('submit', function (e) {

   // and call preventDefault() method of the event object 
   e.preventDefault()

})
/* and now if we complete that form and click submit, nothing will happen,
   it is no longer submitting the form by default way and we are no getting
   a query string in the url when we refreshing the page */
// ==============================================================================

// ==============================================================================
// get input value

/* we have an input in HTML document
   
      <input type="text" id="input-el">        */

// we created an empty array, here we will pass input values
let myLeads = []

// we grab input element from the document
const inputEl = document.getElementById("input-el")

// log input value
console.log(inputEl.value)

// *** the type of input value is always string
console.log(typeof (inputEl.value))
// -> string

// ------------------------------------------------------------------------------

// on button click
buttonEl.addEventListener("click", function () {
   // we add input value to the array
   myLeads.push(inputEl.value)
   // clear out the input field
   inputEl.value = ""
})
// ==============================================================================

// ==============================================================================
// get textarea value

// get control of textarea and button elements
const tweetBtn = document.getElementById('tweet-btn')
const tweetText = document.getElementById('tweet-input')

// after button click
tweetBtn.addEventListener('click', function () {

   // log out tweet inserted in textarea
   console.log(tweetText.value)
   // clear out the textarea field
   chatInput.value = ''

})
// ==============================================================================

// ==============================================================================
/* Radio inputs - giving users a choice of options 
      
   ************************************************************************
   inputes (like buttons) do not have to be in forms, they can stand alone
   ************************************************************************
   
   // here in HTML doc we have 2 radio inputes in a container
   <div class="radios" id="radios">
      <div class="radio">
         <input 
         type="radio"
         id="horses"
         value="horses"
         name="choice-radios"
         >
         <label for="horses">5 duck-sized horses</label>
      </div>
      <div class="radio">
         <input 
         type="radio"
         id="ducks"
         value="ducks"
         name="choice-radios"
         >
         <label for="ducks">5 duck-sized horses</label>
      </div>
      <button>Submit</button>
   </div>                         
   
   value - value property is really important, because it is going to tell us 
          what is radio represents. The value for radioes allways need to be 
          different.
   name - we will give the same name to all of our radio inputs. If we write 
          different names, it will be able to choose more than one option 
          at the same time. Giving the radio inputs the same name creats 
          a radio group, in which only one option can be selected.      */

/* we created a function that will take items from emotions array and render 
   radio inputes on the page  */
function renderEmotionsRadios() {

   let radioItems = ``
   const emotions = ["happy", "funny", "angry", "puppy"]

   for (let emotion of emotions) {
      radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>
        `
   }
   emotionRadios.innerHTML = radioItems
}

// ------------------------------------------------------------------------------

// get checked radio value

// clicking submit button  
submitBtn.addEventListener('click', function () {

   // we we will grab the selected radio element with querySelector and get its value
   const checkedRadio = document.querySelector('input[type="radio"]:checked').value
   console.log(checkedRadio)
})
// -> if we select "happy" radio option, it will console log "happy"

// ------------------------------------------------------------------------------

/* we can use it in conditions

we need to run the conde if any emotion has been selected.    */

// if any of radio is selected it will return true
if (document.querySelector('input[type="radio"]:checked')) {

   const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
   console.log(selectedEmotion)

}
// ==============================================================================

// ==============================================================================
/* Checkbox input

   with checkbox we get a bulean response from the users. If it is checked it 
   will return true, if not - false    */

// we get control of "Continue" button and "Accept Terms" checkbox elements
const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')

// on Continue button click
continueBtn.addEventListener('click', function () {
   console.log(acceptTerms.checked)
   // -> if the ckeckbox is cheked we will get true, otherwise false.
})

// ------------------------------------------------------------------------------

// so we can use it in conditions
continueBtn.addEventListener('click', function () {
   // if the checkbox is checked, we will get "Terms accepted!"
   if (acceptTerms.checked) {
      console.log("Terms accepted!")
   }
   // otherwise "Terms refused!"
   else {
      console.log("Terms refused!")
   }
})
// =============================================================================

// =============================================================================
// we added an submit event listener to the form
form.addEventListener("submit", function (e) {

   e.preventDefault()

   // we want to clear the inputs after submit, there are 2 ways to do it

   // the first way with ampty string
   document.getElementById("post-body").value = ""

   // tthe second way with reset() method
   form.reset()
})
// =============================================================================