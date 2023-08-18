// HTTP requests

/* Request/Response cycle

      Request
         when a client (e.g. your computer) asks for a "resorce" from a server

      Response
         when a server responds to the client

   HTTP (Hypertext Transform Protocol)

      it is a protocol for determining how Hypertext (text) should be
      transferd over the internet.

      Protocol is an agreed-upon standard way of doing something
         https://apis.scrimba.com/jsonplaceholder/posts

      here https:// is the protocol

      http (https) is the most used protocol, but there are some more protocols
         SMTP
         FTP - file transfering protocol

   Components of a HTTP request

      1. Request path (URL)
      2. Request methods
            GET, POST, PUT, DELETE
            others (PATCH, OPTIONS, etc)
      3. Request Body
      4. Headers                             */
// =============================================================================

// =============================================================================
/* Request path (URL)
      address where our desired resorce "lives"

      BaseURL vs Endpoint

         * Base URL is the part of the URL that won't change, no matter
            which resource we want to get from the API

               https://apis.scrimba.com/jsonplaceholder

         * Endpoint specifies exactly which resource we want to get
            from the API

               /post

         Full URL: BaseURL and Endpoint togetherr

            https://apis.scrimba.com/jsonplaceholder/post

         if we click on this URL, it will send GET request

      JSON in the browser  */
// =============================================================================

// =============================================================================
/* Request methods

   the request method is telling the server what kind of request we are making

   the main request methods are GET, POST, PUT, DELETE

      GET - asking the server to send us something
      POST - adding new data to the server
      PUT - updating existing data on the server
      DELETE - removing data from the server

   there are many others (PATCH, OPTIONS, etc)  */

// fetch() can get second parmeter - request method (it is optional)
fetch("https://apis.scrimba.com/jsonplaceholder/todos", { method: "POST" })

// if we don't provide the method, it assumes that the request is GET request
fetch("https://apis.scrimba.com/jsonplaceholder/todos")
// =============================================================================

// =============================================================================
/* Request Body 
      -it is the data we want to send to the server
      -only makes sense with POST and PUT requests
      -needs to be turn into JSON first 
         (for example with JSON.stringify() method)   */

// here we create a POST request to add body object to the data
fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
   method: "POST",
   body: JSON.stringify({
      title: "Buy Milk",
      completed: false
   })
})
// =============================================================================

// =============================================================================
/* Request Headers
      -it is extra/meta information about the outgoing request
      -Auth, body info, client info, etc     */

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
   method: "POST",
   body: JSON.stringify({
      title: "Buy Milk",
      completed: false
   }),
   headers: {
      "Content-Type": "application/json"         /* wtih Content-Type header
      we indicate that there's JSON in the request body. without setting the 
      Content-Type of json the server didn't know how to handle this request body but if we set it, server will parse the request from JSON to JS during adding it to the database. */
   }
})

// we can create the object seperatly, it is a little bit easy to read
const options = {
   method: "POST",
   body: JSON.stringify(data),
   headers: {
      "Content-Type": "application/json"
   }
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
   .then(res => res.json())
   .then(data => console.log(data))
// =============================================================================