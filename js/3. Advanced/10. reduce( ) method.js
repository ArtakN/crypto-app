
// .reduce() method - give me just one thing

const rainJanuaryByWeek = [10, 20, 0, 122]

/* function of reduce() method gets 2 parameters, 
      -total - initial value is 10, then 10+20 =30, then 30+0=30, then 30+122=152
      -currentElement - inital value is 20, then 0, then 122  */
const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (total, currentElement) {

   console.log('total: ' + total, 'currentElement: ' + currentElement)

   return total + currentElement

})

console.log(totalRainfallJanuary)
// -> total: 10, "currentElement: 20"
// -> total: 30, "currentElement: 0"
// -> total: 30, "currentElement: 122"
// -> 152