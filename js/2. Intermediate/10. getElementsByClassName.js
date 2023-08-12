// =============================================================================
/* with getElementsByClassName('className') we can get controll of the severel 
   elements at the same time. After using getElementsByClassName('className') all the elements that have the same className will be passed into an array */
const productsArray = document.getElementsByClassName('products')
// all elements in the HTML document that has class="product" will be inputed into the poductsArray array

console.log(productsArray[1])
// -> we will get the first product element  -  <div class="product on-offer">

// -----------------------------------------------------------------------------

// another example

clearBtn = document.getElementById("clear-button")

// after clicking "Clear all selected products" button
clearBtn.addEventListener('click', function () {

   // we get controll of all the elements in HTML document with class="product" and pass them to an array
   const productsArray = document.getElementsByClassName('product')

   /* here we iterate the productsArray array and from each of the element of the array we remove 
      'purchased' class and add 'on-offer' class   */
   for (let product of productsArray) {
      product.classList.remove('purchased')
      product.classList.add('on-offer')
   }
})
// =============================================================================

// =============================================================================
// getElementsByClassName() vs querySelectorAll()

/* Both document.getElementsByClassName('products') and document.
   querySelectorAll('.products') can be used to select elements with the class products, but they return different types of collections.

   document.getElementsByClassName('products') returns a live HTMLCollection of elements with the class products. This means that if you add or remove elements with the class products from the DOM, the HTMLCollection will automatically update to reflect the changes.

   On the other hand, document.querySelectorAll('.products') returns a static NodeList of elements with the class products. This means that if you add or remove elements with the class products from the DOM, the NodeList will not update to reflect the changes.

   In summary, while both methods can be used to select elements with the class products, they return different types of collections and have different behavior when it comes to updating the collection when the DOM changes. */
// =============================================================================