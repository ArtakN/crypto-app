// =============================================================================
// classList – this is a special object 

// methods of classList object
elem.classList.add("className")
elem.classList.remove("className")
elem.classList.toggle("className")        // on/off
elem.classList.contains("className")
// =============================================================================

// =============================================================================
// classlist.add() method let us to add a class to an element

// we have a list of mails and we want to change bgcolor of the mail after it was clicked

// we add a click event listener to the document 
document.addEventListener('click', function (e) {

   /* by clicking on any element of the document, we get control on it with 
      e.target.id, it let us to get id of the targeted element
      then we add class "read" to this element using classlist.add('className') 
      (we have already creted class 'read' in the style.css)   */
   document.getElementById(e.target.id).classList.add('read')
})

/* but in this case if we click to the mail title or text, it will get 'read' class and will be 
   changed bgcolor of the title or text. but we need to change the hole mail bgcolor and not a 
   part of it. the problem is that we cant click on the hole mail elemet, because it is in a div 
   (it is only a container) and not rendered. We need to set the 'read' class to the parent 
   of the clicked element,     */
document.addEventListener('click', function (e) {
   // we will grabb the parent element of the targeted element, using .parentElement
   document.getElementById(e.target.id).parentElement.classList.add('read')
})
// =====================================================================================================

// =====================================================================================================
// classlist.remove() method of classList

/* for example every mail has 'unread' class, it will work if only in the style.css 'read' class comes 
   after 'unread' class, but it will become a problem if some of our coleges change classes place, and 
   write "unread" under the "read", as we know class which is lower on the style.css page is going to win.
   so we after adding the 'read' class, we need to remove the 'unread' class.   */

document.addEventListener('click', function (e) {

   // we add the "read" class
   document.getElementById(e.target.id).parentElement.classList.add('read')

   // then we remove the "unread" class
   document.getElementById(e.target.id).parentElement.classList.remove('unread')
})
// =====================================================================================================

// =====================================================================================================
// classlist.toggle() is a method of classList - it let us to turn on/off a class

/* to toggole for example 2 buttons (change buttons place in the container), we need to give 
   the container of these buttons display-flex in css then we need to take contrall of the container 
   element, and then give one more class to this container that will change flex-direction: row-reverse;

   CSS

   .container{
      display: flex;
      gap: 1px;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 40px;
   }

   .reverse{
      flex-direction: row-reverse;
   }                                                        */

const sortBtn = document.getElementById('sort-btn')
const container = document.getElementById('container')

sortBtn.addEventListener('click', function () {
   /* here we toggle css class reverse on/off. 
      as soon as we click the button, reverse class is on then the buttons positions in the 
      container will be changed, after the second click the reverse class becomes off, 
      and buttons again changed.*/
   container.classList.toggle('reverse')
})
// =============================================================================

// =====================================================================================================
// classlist.containes()

/* The contains() method is used to check if an element contains a class.
   If the element contains the class, the method returns true. Otherwise, it returns false.

      element.classList.contains("className")   */

/* Example:

   We have a div element in HTML document, that contains a "info" class

      <div class="info" > Item </div>

   To check if the < div > element contains the "info"    */

const divEl = document.querySelector('div')

divEl.classList.contains('info');
// returns true

// If we check a class that is not included:
divEl.classList.contains('main');
// it will return false 
// =====================================================================================================

// =====================================================================================================
// another example

/* we have a radio input container and we want to give a checked radio elemetn "highlight" class,
   here is a problem, if we click another radio input, it will get the "highlight" class, but the 
   radio input that was clicked before will continue to have "highlight" class, so there will 
   be 2 elements with the same style, it is not correct. So we need to delete "highlight" style 
   from the first element as soon as we click the second one. 
 
   the best way to do that is using getElementsByCalssName and remove the class form each element
   and only after that, we will add the "highlight" class to the chek=cked element  */

// we get control to the radio inputs container
const emotionRadios = document.getElementById('emotion-radios')

/* here we creted an event listener on radio inputs contaier element that will listen out a 
   'change' event and call highlightCheckedOption callback function   */
emotionRadios.addEventListener('change', highlightCheckedOption)

// here we crete the highlightCheckedOption function and pass event as a parameter
function highlightCheckedOption(e) {

   /* we gave "radio" class to the all inputs in the emotionRadios container element
      using getElementsByCalssName we will create an array of all items that have the "radio" class */
   const radios = document.getElementsByClassName('radio')

   // Iterate over the array and remove the "highlight" class from each one
   for (let radio of radios) {
      radio.classList.remove('highlight')
   }

   // and only after this we will add the "highlight" class to the parent of the selected input radio  
   document.getElementById(e.target.id).parentElement.classList.add('highlight')
}
// =====================================================================================================