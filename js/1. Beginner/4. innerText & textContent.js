/* 
   innerText
   textContent
   difference between innerText and textContent
*/
// =============================================================================
// innerText is a JS property that is used to get or set the text content of an element. 

// index.html
<h1 id="welcome-el"></h1>

// index.js
let name = "Artak Navoyan"
let greeting = "Welcome back "

// to pass a text in an element on the document we use innerText  
let welcomeEl = document.getElementById("welcome-el")

// welcomeEl.innerText        we get the text content of the element
// welcomeEl.innerText =      we set the text content of the element 

welcomeEl.innerText = name + greeting
// <h1 id="welcome-el">Artak Navoyan Welcome back</h1> 

/*******************************************************************************
   if we only need the element once, we don't need to declare a varrible the best practice is to write in one line. 

      document.getElementById("welcome-el").innerText = name + greeting

   it calles chaining (here we chain more than one method)  
*******************************************************************************/

welcomeEl.innerText = welcomeEl.innerText + "👋"

// short:   
welcomeEl.innerText += "👋"
// -> "Artak Navoyan Welcome back 👋"
// =============================================================================

// =============================================================================
// textContent property - the same we can do using textContent method

let errorParagraph = document.getElementById("error")

errorParagraph.textContent = "Something went wrong, please try again"
// ===========================================================================

// =============================================================================
// difference between innerText and textContent

// index.html
// <body body id = "container">
//    <h1>🤖 BoredBot 🤖</h1>
//    <button class="btn">Get Image</button>
//    <style>.btn {background - color: green}</style>
//    <script src="index.js">function any() { }</script>
// </body>

// JavaScript
const el = document.getElementById('container');

/* textContent returns the content of all elements, including <script> and <style> elements */
console.log(el.textContent);
// -> 🤖 BoredBot 🤖 
// Get Image 
// .btn {background-color: green} 
// function any() {}

// innerText returns only human-readable elements
console.log(el.innerText);
// -> 🤖 BoredBot 🤖 
// Get Image
// =============================================================================