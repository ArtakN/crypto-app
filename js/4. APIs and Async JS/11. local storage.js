/*
   localStorage
         .setItem()
         .getItem
         .clear()
      array in localStorage
         JSON.stringify()
         JSON.parse()
      checking localStorage before rendering
      grabURL of the current tab in Google Chrom 
*/

// ===============================================================================
/* The localStorage is a property of the window interface allows 
   you to access a Storage object for the Document's origin; the stored 
   data is saved across browser sessions.

   The keys and the values stored with localStorage are always in the 
   UTF-16 string format, which uses two bytes per character. As with 
   objects, integer keys are automatically converted to strings. 


   LocalStorage — это свойство, открывающее доступ к специальному объекту 
   Storage (хранилище). Его используют для получения информации из локального
   хранилища. Данные хранятся там неограниченный период, даже при обновлении 
   страницы они не удаляются и могут быть удалены только при помощи JavaScript. 

   Когда использовать cookie, а когда localstorage?

   Самое большое отличие cookie от localStorage - это то, что первый работает 
   с сервером, а второй нет, хотя это тоже можно сделать, но об этом немного 
   позже. Используйте локальное хранилище там, где вам не нужна тесная работа 
   с сервером, а нужно хранить какие-то временные данные. К примеру, представим,
   что вы создаете какое-то web-приложение, куда человек может зайти, ввести 
   несколько задач, которые он хочет сделать за день и удалить те, которые уже 
   выполнил. Зачем нам тут сервер? Правильно, не за чем. Вот тут и стоит 
   использовать localStorage. Человек заходит, вводит задачи, они записываются 
   в специальное место его браузера и там хранятся. Когда человек зайдет снова 
   через какое-то время, они будут оттуда выбраны и показаны. К примеру, кликнув 
   по задаче, она будет удаляться с локального хранилища и, следовательно, 
   показываться ему уже не будет. 

   стоит сказать, что помимо этого объекта есть еще один - sessionStorage. 
   Отличается он только тем, что хранит данные только для одной вкладки, 
   и они будут удалены, как только пользователь закроет вкладку.


   in dev tools there is Aplication. when we click on it we will see
   Service Workers, Session Storage, Local Storage, Cookies

   if we click the drop button near LocalStorage will drop the website
   link and if we click to the link we will see a table of 2 columns
   - key and value.

   These values in Local Storage only is available for me.
   
  
   and if we now refresh the page, we will see that 
   "myLeads", "https://www.somelink.com" is there, 
   and page refresh didn't delete it  */
// =================================================================================

// =================================================================================
// we are going to interact with localStorage in our JS file

// 1. Save a key-value pair in localStorage
localStorage.setItem("myName", "Artak")
/* then in localstorage we will see our note - "myName" the name in the key coumn
   and "Artak" in the value column. And even if now we refresh the page the note 
   will not be deleted.  */

// 2. Get the value from localStorage 
let name = localStorage.getItem("myName")
console.log(name)       // "Artak"
/* Even if we delete the code above - localStorage.setItem("myName", "Artak")
   we will get the value   - Artak
   because localStorage stores the info till we clear it  */

// 3. Clear localStorage
localStorage.clear()

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)        // we will get the value
// localStorage.clear()
// *** both key and value need to be strings
// =================================================================================

// =================================================================================
// array in localStorage

// storeing arrays in local storage:
let myLeads = ["www.awesomelead.com"]

/* we can't store arrays in localStorage, because localSorage only supports strings

      use:     JSON.stringify()     to turn an array to a string

   on the other side, when we fetch data from the localStorage

      use:     JSON.parse()         to turn a string to a array      */

// so we have to turn myLeads array into a string
myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)      // string

// Turn the string into a array again
myLeads = JSON.parse(myLeads)

console.log(typeof myLeads)      // object

// ---------------------------------------------------------------------------------

// Save the myLeads array to localStorage 
localStorage.setItem("myLeads", JSON.stringify(myLeads))

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// =================================================================================

// =================================================================================
// We want to render our leads in localStorage

// we will check localStorage before rendering

/* we can have 2 situations
      1. there is some data in localStorage
      2. there is no data in localStorage

   so before rendering, we are going to check if the value is thruty (there is 
   some data in localStoreage) or falsy (there is no data in localStoreage)
   
   if there is no leads storing in localStorage, then the value is `null`.
   and it is falsy. in this case we are not going to do anything.   
   
   but if we fined any leads there, we will parse these leads and pass them 
   to our `myLeads` array and then render the array  */

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   renderLeads()
}
/* and now if we save some leads and refreh the page, our leads will be stored in
   localStorage and persisted across refresh.   */

// we used localStorage as a small database to store our leads

// ----------------------------------------------------------------------------------

// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")

// 2. Listen for double clicks on the delete button
deleteBtn.addEventListener("dblclick", function () {

   // 3. When the button is doule clicked, clear localStorage, myLeads, and the DOM
   localStorage.clear()
   myLeads = []
   renderLeads()  /* these function renders myLeads array, so we need to rerender 
   it to clear DOM (remove existing leads in the DOM)  */

})
// =================================================================================

// =================================================================================
// grabURL of the current tab in Google Chrom 

// look for help in stckoverflow.com
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
   // since only one tab should be active and in the current window at once
   // the return variable should only have one entry
   let activeTab = tabs[0]
   let activeTabId = activeTab.id // or do whatever you need
})

// all information about Chrom Extation development we can fined in google chrom documentation
developer.chrome.com / docs / extations / reference / tabs / #metod - query
// =================================================================================