/* REST - Representational State Transfer

   REST is a design pattern to provide a standart way for clients amd servers 
   to communicate. Simply to say - it is a standarized way to have your computer, like your laptop, get or send information to a server.
   
   Principles of REST

      Client & Server separation   
      
         If the server is set up as RESTful API (REST for server)
         the server return in response to incoming requests JSON data and don't care how the client display the data, for all clients it will work the same - they will request data in the form of JSON, the server will send back JSON data and it can be used to render by all type of computers - web browser, mobile browser, mobile app, smartWatch app
      
      Statelessness 
      
         Simply say the concept of statelessness means that when the client makes a request to a server, the server dosen't maintain any memory of that request. so when we set a request, the server fullfilles that request and sends back a response and then forgets averything about that request and about the client.
         If of some reason the client needs the server to know some more information it will need to send that every single time makes a request.
         
      Accessing "Resources"

         using standardized URl endpoints 

         for example bicycle shop API
            BaseURL: https://mikesbikes.com/api

            endpoint: /bikes
               with endpoints will interact methods
                  GET
                  POST
            item ID: /bikes/:id (e.g. /bikes/123  - 123 is the bike ID) - URL Parameter
               with item id will interact methods
                  GET   (get item data)
                  PUT   (edit item data)
                  DELETE (delete item data)

      Nested Resources
         /bikes/:id/reviews                                            
================================================================================

================================================================================
   Statelessness
   1. What does it mean for the server to be "Stateless"?

         It forgets the interaction after the response is sent.
  
    2. Retrieve a list of all the bikes that are sold?

         GET /bikes

    3. Retrieve detailed information about the bike with an ID of 42?

         GET /bikes/42
    
    4. Update the price of the bike with an ID of 21?
       PUT /bikes/21
    
    5. Add a new bike to the list of bikes being sold?
       POST /bikes
    
    6. Remove the bike with an ID of 56 from the list of bikes?
       DELETE /bikes/56   
       
--------------------------------------------------------------------------------
   Nested Resourced

   1. How is a nested resource URL like /bikes/123/reviews
      different from an endpoint like /reviews?
      /bikes/123/reviews - return an array of reviews about that specific bike
      /reviews - return an array of all reviews on the site
  
   2. What URL might you use to GET the review with an ID of 5 on the bike
      with the ID of 123?
      /bikes/123/reviews/5

   3. Describe a "URL Parameter" in your own words:
      Variable inside the URL that acts as a placeholder for the real value
      (Oftentimes they replace the ID of the resource)
================================================================================

================================================================================
   Challenge: GET all the comments from the blog post with ID of 2 and log to the console

   BaseURL: https://apis.scrimba.com/jsonplaceholder/
   Endpoint: ??? (Check JSON Placeholder docs: https://jsonplaceholder.typicode.com/guide/ 
   and look for the "Listing nested resources" section)     */

fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
   .then(res => res.json())
   .then(data => console.log(data))
// ================================================================================
