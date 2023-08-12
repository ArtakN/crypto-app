/* JSON is short of "JavaScript Object Notation", and it often used to store
   and send data. For example when we send a data from a server to a client. 

   Here we are using "person.json" to configure our app and to provide metadata 
   about it. So google chrom will read threw this, and for example if it saw
   the name is "Leads tracker" then it will name our extanshion "Leads tracker".

   -----------------------------------------------------------------------------

   person.json file

   *** it is not a js object, it is only a notation. As we see the property name
      is in double quotes, too. 
   
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
      
   in JSON we will usually see an array of objects

   -----------------------------------------------------------------------------

   it is good to use JSON Validator, for example when we write our JSON notation
   for this we can use "jsonlint.com" validator -> copy the json code then -> press 'Validate JSON' button.

   to see JSON responses
      in any browser -> inspect code -> Network -> XHR filter 
*/