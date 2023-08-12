/* 
   add element in document
      inndrHTML
      createElement and append()
*/

// =============================================================================
/* The Element property innerHTML gets or sets the HTML or XML markup contained 
   within the element.   */

// we want to pass elements of an array in an unorder list
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const ulEl = document.getElementById("ul-el")

for (let i = 0; i < myLeads.length; i++) {
   // we need to use innerHTML to pass it as html elements
   ulEl.innerHTML += `<li>${myLeads[i]}</li>`
   /* we will not write innerHTML in the loop, because it we render the hole 
      document after every add, it is cost, so we need to improve the code
      
      one more inportant thing here: to render all elements we need to write +=
      otherwise every next element will wipe the element before, and in the end 
      we will see only the last element on the screen */
}

// improving code

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
   // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
   listItems += "<li>" + myLeads[i] + "</li>"
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems

// -----------------------------------------------------------------------------

// using innerHTML

// we grab a container element from the document
const container = document.getElementById("container")

/* we created a button element in a <div id='container'></div> using innerHTML, 
   and added an id and a click event listner on it, now we can use this element */
container.innerHTML = "<button onclick='buy()'>Buy!</button>"

/* now onclick on that button we need to create a paragraph under the button 
   (in the container) that says "Thank you for buying!"   */
function buy() {
   /* here we write += to render the paragraph under the button in the container. 
      if we wrote only = then on the next render the paragraph whould wipe the 
      button */
   container.innerHTML += "<p>Thank you for buying!</p>"
}
// ============================================================================

// ============================================================================
// createElement and append()

/* There is one more way to add elements in document using createElement() and
   append() methods instead of innerHTML, but it is uncomfortable, so we will 
   use the innerHtml. */

for (let i = 0; i < myLeads.length; i++) {
   // create element <li></li>
   const li = document.createElement("li")
   // set text content
   li.textContent = myLeads[i]
   // use .append() method to add li elements to the ul element 
   ulEl.append(li)
}
// =============================================================================

// =============================================================================
// using JS to render out the posts
const posts = [
   {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/logo.png",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
   },
   {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/logo.png",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
   },
   {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/logo.png",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
   }
]

const mainEl = document.querySelector(".main")
const userNameEl = document.querySelector(".main__username")


for (let i = 0; i < posts.length; i++) {
   mainEl.innerHTML += ` 
       <div class="main__post">
           <p class="main__name">${posts[i].name} </p>
           <p class="main__userName">${posts[i].username}</p>
           <p class="main__location">${posts[i].location}</p>
           <img src=${posts[i].avatar} class="main__avatar">
           <p class="main__postImg">${posts[i].post}</p>
           <p class="main__comment">${posts[i].comment}</p>
           <div class="main__likes">${posts[i].likes}</div>
       </div>
   `
}
// =============================================================================
