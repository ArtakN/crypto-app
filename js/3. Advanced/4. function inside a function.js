// return a function inside a function

/* sometimes we need to access a local varible of a function inside another function.
   one of the way to do that is return a function inside a new function  */
function getLottoNumbers() {
   const winningNums = []
   for (let i = 0; i < 6; i++) {
      winningNums.push(Math.round(Math.random() * 100))
   }
   return winningNums
}

/* in this function we need to access the winningNums array, but the
   problem is that winningNums is a local varible of getLottoNumbers 
   function and it is not visable out of that function, so */
function getWinningNumbersHtml() {
   /* we return getLottoNumbers function in this function and get 
      access of the winningNums array and map it */
   return getLottoNumbers().map(function (num) {
      return `<div class="number">${num}</div>`
   }).join(' ')
}

document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml()
// ============================================================================

// ============================================================================
// Closures - замикания

/* A closure is the combination of a function bundled together (enclosed)
   with references to its surrounding state (the lexical environment).
   In other words, a closure gives you access to an outer function's scope
   from an inner function. In JavaScript, closures are created every time
   a function is created, at function creation time. */
function createCounter() {
   let count = 0;
   return function add() {
      count++;
      console.log(count);
   }
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

/* In closures an inner function (add) has access to variables and
   functions defined in a outer function  (createCounter)
   В этом примере функция createCounter() создает замыкание, которое сохраняет
   ссылку на переменную count внутри себя и возвращает функцию, которая
   увеличивает count при каждом вызове и выводит его значение в консоль.
   При вызове createCounter(), создается новый экземпляр функции с собственной
   лексической областью видимости, в которой хранится переменная count.
   После того, как createCounter() была вызвана, мы сохраняем возвращенную
   функцию в переменной counter. При вызове counter() мы получаем доступ к
   замыканию и можем изменять значение count. */
// ============================================================================