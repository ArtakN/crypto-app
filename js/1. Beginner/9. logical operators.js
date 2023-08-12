/*
   logical operators
      And   - &&
      Or    - ||
      not   - !
*/
// ==============================================================================
// logical operator AND (&&)

// here we want to generate a sertificate if both of the conditions are true,

let hasCompletedCourse = true
let givesCertificate = true

// we can do it with if operators
if (hasCompletedCourse === true) {
   if (givesCertificate === true) {
      generateCertificate()
   }
}

function generateCertificate() {
   console.log("Generating certificate....")
}
// however it is not a good way

// a better way is to use logical operator AND
if (hasCompletedCourse === true && givesCertificate === true) {
   /* we can remove `=== true`, because anywahy it will return a bulean
      if (hasCompletedCourse && givesCertificate) */
   generateCertificate()
}
// ==============================================================================

// ==============================================================================
// logical operator OR (||)

// here we want to generate a sertificate if one of the conditions is true 

let hasCompletedCourse = false
let givesCertificate = true

/* here we use or aperator, it allows us to check ether first or second condition 
   is true and if one of this conditions is true, the statement will be executed */
if (hasCompletedCourse || givesCertificate) {
   generateCertificate()
}

function generateCertificate() {
   console.log("Generating certificate....")
}
// ==============================================================================

// ==============================================================================
// logaical operator ! (not)

let loadingCompleted = true

console.log(!loadingCompleted)   // false - not true
// ==============================================================================

// ==============================================================================
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

if (age < 6) {
   console.log("free")
} else if (age < 18) {
   console.log("child discount")
} else if (age < 27) {
   console.log("student discount")
} else if (age < 67) {
   console.log("full price")
} else {
   console.log("senior citizen discount")
}
/* Here is an importatn thing to know:
   on second line we don't need to write two conditions `age >= 6 && age <=17`,
   we only write `age < 18`, beacuse it will check the first condition and if
   it returns true (for example age = 5), then it will not check other
   conditions it will execute `console.log("free")`.
   it will check the next conditon only if the first one returns false (if age >= 6),
   so if age is 15 then the first condition returns false because 15 > 6,
   and checks the second conditon 15 < 18, it returns true and will execute
   `console.log("chiled discount")`. */
// ==============================================================================