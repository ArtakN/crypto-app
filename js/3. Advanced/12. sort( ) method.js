// ==========================================================================
/* sort() method is a method of the Array object that allows us to sort the
   elements of an array in place.This means that the original array is modified and no new array is created.

   By default, the sort() method sorts the elements of an array in ascending (по возрастанию) order, based on their Unicode code point values.This means that the elements are first converted to strings, and then compared according to their sequences of UTF - 16 code units values1.
   
   To sort the elements of the array by their numeric values, we need provide a custom comparison function as an argument to the sort() method. This function should take two arguments, a and b, and return a value that indicates their relative order.

   If the function returns a negative value (if a - b < 0), a will be sorted before b. If it returns a positive value (a - b > 0), b will be sorted before a. If it returns 0 (a-b = 0), the order of a and b will not change. */

const numbers = [4, 2, 5, 1, 3];

// If we want to sort the elements of an array in ascending (asc) order, we subtract b from a

numbers.sort((a, b) => a - b);

/* In this example, we provide an arrow function as an argument to the sort() 
   method. This function takes two arguments, a and b, and returns the result of subtracting b from a. */

onsole.log(numbers);      // [1, 2, 3, 4, 5]

// If we want to sort the elements of an array in descending (desc) order, we subtract a from b

numbers.sort((a, b) => b - a);

console.log(numbers);      // [5, 4, 3, 2, 1]

/*******************************************************************************
   As we mentoned earlier sort() method modifies the original array and no new array is created. But sometimes we don't need to modify the original array.
   In this case we need to copy the original array and modify the copy: */

const products = [
   { name: "Laptop", price: 1000, rating: 4.5 },
   { name: "Smartphone", price: 800, rating: 4.7 },
   { name: "Tablet", price: 600, rating: 4.3 },
   { name: "Smartwatch", price: 400, rating: 4.6 }
];

// The task is to write a function that takes this array as an argument and returns a new array sorted by the products’ price in ascending order.

// 1. The first way is to copy with spread operator
function priceAsc(array) {
   // we copy the loriginal array with spread operator
   const sortedArray = [...array];
   // and change the copy array
   sortedArray.sort((a, b) => a.price - b.price);
   return sortedArray;
}

// 2. The second way is to copy with slice() method
function priceAsc(array) {
   // we copy the original array with sliec() method. If slice method doesn't get parameters it returns a full copy of the array array
   const sortedArray = array.slice();
   sortedArray.sort((a, b) => a.price - b.price);
   return sortedArray;
}
// =============================================================================