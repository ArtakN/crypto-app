/* what does object assign do?
      -it copies properites from a source object to a target object
      -returns the new versin of the target object
      
      Object.assign(target, source)    */

// we have an object
const studentDetails = {
   firstName: 'janaka',
   lastName: 'siriwardena',
   age: 28,
   country: 'sri lanka',
   email: 'j.siri@totalinternet.com',
   discordUsername: 'JS1',
}

// and a new empty object
const studentDetailsCopy = {}

// with object aasign we copy properties of studentDetails to the studentDetailsCopy
Object.assign(studentDetailsCopy, studentDetails)

console.log(studentDetailsCopy)
/* -> {firstName: "janaka", lastName: "siriwardena", age: 28, country: "sri lanka",
      email: "j.siri@totalinternet.com", discordUsername: "JS1"}  */
// ==================================================================================

// ==================================================================================
// using object assign in constructor function

const studentDetails = {
   firstName: 'janaka',
   lastName: 'siriwardena',
   age: 28,
   country: 'sri lanka',
   email: 'j.siri@totalinternet.com',
   discordUsername: 'JS1',
}

/* in function constructor 'this' is an object and parameter data is an object, too
   so instead of writeing a lot of 'this', we can use Object.assign() to copy all 
   the properties of the data object to the this object inside constructor function  */
function Student(data) {
   // this.firstName = data.firstName
   // this.lastName = data.lastName
   // this.age = data.age
   // this.country = data.country
   // this.email = data.email
   // this.discordUsername = data.discordUsername

   Object.assign(this, data)

   this.summariseStudent = function () {
      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old 
                  and comes from ${this.country}. Their email is ${this.email} 
                  and you can find them on discord as ${this.discordUsername}`)
   }
}
// ==================================================================================