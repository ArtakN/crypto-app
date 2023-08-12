/*
   getElementByID
   querySelector
      id
      class
      tag
      tag with an attribute
   querySelectorAll
*/

// =============================================================================
/* we have already learned how to grab element from the document by getElementById, but this method is not so powerfull, bacause we can get ellements only by Id. */
let sumEl = document.getElementById("sum-el")

// -----------------------------------------------------------------------------

/* there is one more method to grab elements from the document - querySelector, 
   this is more dynamic method   */

// grab an element from the document by Id
let sumEl = document.querySelector("#sum-el")

// grab an element from the document by class
let sumEl = document.querySelector(".sum-el")

/************************************************************************
if more than one element have the same class, anyway here we will get
only one element, the first element that has this class.

to grab all elements with the same class we need to use querySelectorAll
we will get an array with all elements with the cladd
************************************************************************/
let listItem = document.querySelectorAll(".list-item")

// grab an element from the document by tag name
let sumEl = document.querySelector("body")

// grab an element from the document by tag name with an attribute
let sumEl = document.querySelector('input[type="radio"]')

// grab an element from the document by tag name with an attribute and checked
// using for radio and checkbox inputs 
let radioButton = document.querySelector('input[type="radio"]:checked')
// -> we will get checked radio element
// =============================================================================

// *****************************************************************************
// we can get control of the element body directly
let mainEl = document.body
// *****************************************************************************