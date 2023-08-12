/*
   let, const
   typeof
   round the decimals
   conver string to number
*/

// ==================================================================================
// If possible, use const. If not, use let.
// ==================================================================================

// ==================================================================================
// data type - to know data type we use typeof
let myName = 'Artak'
console.log(typeof myName)
// -> string
// ==================================================================================

// ==================================================================================
// round the decimals with .toFixed() method

// we can round the decimals using toFixed(decimal amount) method
const totalPrice = 420.69235632455
console.log(totalPrice.toFixed(2))
// -> 420.69
// ==================================================================================

// ==================================================================================
// conver string to number

// we can convert a number to a string using Number() method
const totalPrice = "420.69235632455"
console.log(Number(totalPrice).toFixed(2))
// ==================================================================================

// ==================================================================================
// we iterate an array and create dom elements 
for (let post of postsArr) {
   html += `
       <h3 class="title">${post.title}</h3>
       <p>${post.body}</p>
       <hr />
   `
}
// then render created elemetns to the DOM
document.getElementById("blog-list").innerHTML = html

// then we created a new one and render before elemnts created below
document.getElementById("blog-list").innerHTML = `
                <h3 class="main-title">${post.title}</h3>
                <p>${post.body}</p>
                <hr />
                ${document.getElementById("blog-list").innerHTML}
            `
// ==================================================================================