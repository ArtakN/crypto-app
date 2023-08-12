/* 
   event listener
      add event listener on a button
         -in HTML
         -in JavaScript 
      event types
*/
// =============================================================================
// 1. in HTML
< body >

   <div>
      {/* in button elemnt we write wich event listenr (click) and which 
            function will be called  */}
      <button onclick="functionName"></button>
   </div>

   <script src="index.pack.js"></script>
</ body >

// =============================================================================

// =============================================================================
// 2. in JavaScript  -  we will usually use this method

let fightButton = document.getElementById("fight_button")

fightButton.addEventListener("click", function () {

   /* inside the function we put the code what ever should 
      happen when the element gets clicked    */

})

// if element name includes symbols like -_, it can return error, 
fight_button.addEventListener("click", function () {

})
// =============================================================================

// =============================================================================
/* Mouse Events:     click, dblclick, mousedown, mouseup, contextmenu, mouseout, 
                     mousewheel, mouseover
   Touch Events:     touchstart, touchend, touchmove, touchcancel
   Keyboard Events:  keydown, keyup, keypress
   Form Events:      submit, focus, blur, change   *** hanging on form element
                                                       not button element   
   Window Events:    resize, scroll, load, unload, hashchange  */
// =============================================================================

// =============================================================================
/* The best practice is to create a function seperatly and call it in the 
   eventListener  */

continueBtn.addEventListener('click', termsChecker)

function termsChecker() {

}
// =============================================================================