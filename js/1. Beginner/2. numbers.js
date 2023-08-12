/*
   numbers
      increment
      decrement
*/

// =============================================================================
let count = 8          // initialization or assignment varible

count = 88             // reassignment varible

// -----------------------------------------------------------------------------

// increment 
count = count + 1    // here we increment count in 1, 
// we reassigned "count" to "count + 1", count = 88 + 1 and now count is 89

// short form
count += 1           /* it is the same  count = count + 1, 
                        and now  count = 89 + 1  will be  90  */

// syntex shuger
count++             /* it is the same  count = count + 1, 
                        and now  count = 90 + 1  will be  91  */

count += 10          // count = count + 10,  count = 91 + 10   (101)
// -----------------------------------------------------------------------------

// increment count by onclick

// index.js
function increment() {
   count += 1
}

// index.html
<button onclick="increment">Count increment</button>

/* on every click on this button, increment function will be called
   and reassign the count:
      click count = 92 + 1 = 93
      click count = 93 + 1 = 94
      ...  */
// =============================================================================

// =============================================================================
// decrement

count = count - 1    // here we decrement count in 1, 
// we reassigned "count" to "count - 1", count = 88 - 1 and now count is 87

// short form
count -= 1           /* it is the same  count = count - 1, 
                        and now  count = 87 - 1  will be  86  */

// syntex shuger
count--             /* it is the same  count = count - 1, 
                        and now  count = 86 - 1  will be  85  */
// =============================================================================

// =============================================================================
//Number methods

/* toLocaleString() returns a string with a language-sensitive representation 
   of the number, allowing us to specify the formatting options such as the number of decimal places and the use of a thousands separator.   */

const number = 1234567.895482474;

const formattedNumber = number.toLocaleString('en-US', {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});

console.log(formattedNumber);
// -> '1,234,567.89'

/* The first argument to the toLocaleString method is the locale, which
   specifies the language and formatting conventions to use. In this case, the locale is set to 'en-US', which uses US English conventions. (There are some common locales 'en-GB' for British English, 'de-DE' for German, 'fr-FR' for French, 'es-ES' for Spanish, and 'zh-CN' for Chinese.)

      if we use 'fr-FR' locale insted of 'en-US' we will get 1 234 567,89

   The second argument to the toLocaleString method is an options object that specifies the formatting options. In this case, the options object sets the minimumFractionDigits and maximumFractionDigits properties to 2, which means that the number will be formatted with two decimal places.
   The minimumFractionDigits and maximumFractionDigits properties are just two of the many options that we can use to customize the formatting of the number. Some other options that you can use include:

   style: Specifies the formatting style to use, such as 'decimal', 'currency',
               or 'percent'.
   currency: Specifies the currency to use when formatting a number as a
               currency value, such as 'USD' or 'EUR'.
   currencyDisplay: Specifies how to display the currency, such as 'symbol',
               'code', or 'name'.
   useGrouping: Specifies whether to use grouping separators, such as thousands
               separators. */
const number = 1234567.89;
const formattedNumber = number.toLocaleString('en-US', {
   style: 'currency',
   currency: 'USD',
   currencyDisplay: 'symbol',
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});
console.log(formattedNumber);
// -> '$1,234,567.89'
// =============================================================================

// =============================================================================
// toFix()

/* If we want to format a number with a fixed number of fraction digits without 
   changing the locale, we can use the toFixed() method. This method formats a number using fixed - point notation and returns a string representation of the number with the specified number of digits after the decimal point.   */

const item = { rate: 3.4567 };

const formattedRate = item.rate.toFixed(2);
console.log(formattedRate);
// -> "3.46"

/* In this example, we call the toFixed() method on the rate property of the 
   item object and pass 2 as an argument to specify that we want to format the number with 2 fraction digits.The toFixed() method returns a string representation of the number with 2 digits after the decimal point.
// =============================================================================