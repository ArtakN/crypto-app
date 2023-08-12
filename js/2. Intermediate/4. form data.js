/*  
   form data
      storing data
      getting data
*/

// ==============================================================================
// storing data from a form in an object

/* We need to get access to the inputs that user has submitted. One greate way 
   doing that is useing form data. Form data is a special kind of function. 
   When a user has submitted a form, we can pass the hole form element to 
   FormData(formElement) function and it returning an object that includes all form data. 
   It is very usefull to get all inputed data in one object, it makes easy sending 
   form data to a server. 

   for example we want to store the data of 'login-form' that has 3 inputes -
      - username, email, password  */

// at first we get control of 'login-form' form element from the DOM
const loginForm = document.getElementById('login-form')

// we set up an event listener to the form, that is listening out a submit event 
loginForm.addEventListener('submit', function (e) {

   /****************************************************************************
      we add event listener to the form element and not to the button
   ****************************************************************************/

   // we stop default behaviour
   e.preventDefault()

   /* then we create loginFormData const which will store the loginForm data,
      using "new FormData()" function, there is `new` keyword before FormData(),  
      because it is a special kind of function - constructor function. 
      Then we pass the form element in the FormData() function to tell him which 
      form data we need to collect.  */
   const loginFormData = new FormData(loginForm)
   // this special kind of function returns a special kind of object
   console.log(loginFormData)
   // -> FormData {}
})
// ==============================================================================

// ==============================================================================
// .get() method of FormData object - using to get data from FormData object

/* for example we need to get the value of the `userName` input
      
      <input 
        type="text" 
        id="userName" 
        name="userName"
        placeholder="Enter your username"
        required
      >

   attribute name="userName" of input element is needed to get data from the input  */

loginForm.addEventListener('submit', function (e) {      // the same function

   e.preventDefault()

   // stored data from the form (detailes are below)
   const loginFormData = new FormData(loginForm)

   /* we need to call .get() method on to the end of loginFormData and pass in it
      what we want to get - here we want to get the 'username' input value, 
      the get() method is going to go into the loginFormData object and extract
      the information that we want.  */
   const userName = loginFormData.get('userName')

   console.log(userName)
   // if in the userName input enter "Artak" and press submit button, we will get
   // -> Artak    
})
// ==============================================================================