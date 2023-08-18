/* JSON (JavaScript Object Notation) it often used to store and send data. 
   For example data from a server to a client. 
   
      {
         "name": "Joe Schmoe",
         "age": 42,
         "gender": "male",
         "hobbies": [
             "skiing",
             "surfing",
             "piccolo"
         ]
      } 
      
      *** it is not a js object, it is only a notation. As we see the property name is in double quotes, too. 
      
   in JSON we will usually see an array of objects

   after we get data from server in JSON, we need to parse JSON response to JS

   -----------------------------------------------------------------------------

   it is good to use JSON Validator, for example when we write our JSON notation
   for this we can use "jsonlint.com" validator -> copy the json code then -> press 'Validate JSON' button.

   to see JSON responses
      in any browser -> inspect code -> Network -> XHR filter 
*/