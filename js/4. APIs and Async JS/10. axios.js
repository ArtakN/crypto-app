/*
   axios
   async-await for axios
   error catching in axios
*/

// =============================================================================
// now we use fetch for server requests
useEffect(() => {
   const fetchPizzas = () => {
      setIsLoading(true)

      fetch('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
         .then((res) => res.json())
         .then((data) => {
            setCards(data)
            setIsLoading(false)
         })
   }
}, [selectedCategory])

/* We will use axios insted of fetch to send requests and get resopnes,
   because axios is more simple to use and it has more functionality.

   To use the axios library, we need to install it at first

      npm install axios

   then we need to import it to the component   */
import axios from 'axios'

// we will change axios insted of fetch
useEffect(() => {
   const fetchPizzas = () => {
      setIsLoading(true)

      // and now we will use .get() method of axios to create a server request 
      axios.get('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
         // we get a js object here and don't need to parse json
         .then((res) => {
            // we will get data from the js object
            setCards(res.data)
            setIsLoading(false)
         })
   }
}, [selectedCategory])
// =============================================================================

// =============================================================================
// async-await for axios
useEffect(() => {

   // we write async on the front of parent function
   const fetchPizzas = async () => {
      setIsLoading(true)

      // inside the parent function with async we can use awayt function anywhere
      const res = await axios.get('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
      // we get a js object here and don't need to parse json
      // we will get data from the js object
      setCards(res.data)
      setIsLoading(false)
   }
}, [selectedCategory])
// =============================================================================

// =============================================================================
// error catching in axios

/* in fetch we catched erroers with method .catch(), but in axios we cant do it
   with method .catch, because res.data is not a promise, res is a promise and we have already get data from promise (res.data). method .catch() we can use only with promises like .then().catch() - here we use it because method
   then() always returns a promise */

// for axios we will use try-catch statement (this is vanil js)

useEffect(() => {

   const fetchPizzas = async () => {
      setIsLoading(true)

      try {
         // code in try block will run if we have success response
         const res = await axios.get('https://646fcd6809ff19b12087c5c4.mockapi.io/items?category=' + selectedCategory)
         setCards(res.data)
         setIsLoading(false)

      } catch (error) {
         // code in catch block will run if we get an error in the response
         setIsLoading(false)
         console.log('error', error)

      }

   }
}, [selectedCategory])

// try catch has 3rd block - finally
try {

} catch (error) {

} finally {
   /* finally will not get anything, code in finally will run anywahy is there error or not. Here we will write code that anyway need to run, dosen't mattar will we get accsess or error.
   for example in the code above we wrote setIsLoading(false) in both of section and in try and in catch sections, because we need to run it anywhere, so we can write it only in the finally section.  */
   setIsLoading(false)
}
// =============================================================================