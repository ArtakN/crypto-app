/* The Fetch API provides a JavaScript interface for accessing and manipulating 
   parts of the protocol, such as requests and responses. It also provides a 
   global JS fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.  */

// we do the fetch request and get response from the server (response is json)
fetch("https://dog.ceo/api/breeds/image/random")
   //  then we need to parse (change) the json response to js using .json() method
   .then(response => response.json())
   // then we will get access to the data and console log it
   .then(data => console.log(data))

// ----------------------------------------------------------------------------

// another example

// we do the fetch request, to get a random image from the Dog API
fetch("https://dog.ceo/api/breeds/image/random")
   // then we parse the json response to js
   .then(response => response.json())
   // then we get access to the data
   .then(data => {
      // and in image-container element render an image using a message property of the data object 
      document.getElementById("image-container").innerHTML = `
            <img src="${data.message}" />
        `
   })

   //---------------------------------------------------------------------------

   // with common function: 
   .then(function (response) {
      return response.json()
   })

   // with arrow function:
   .then(response => response.json())

// -----------------------------------------------------------------------------