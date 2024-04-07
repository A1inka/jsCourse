// Function Declaration
// function greet(name) {
//     console.log('Hello - ', name)
// } // можем обращаться до объявления

// Function Expression
// const greet2 = function (name) {
//     console.log('2 Hello - ', name)
// } 

// greet('Alina')
// greet2('Alina')

// console.log(typeof greet)
// console.dir(typeof greet) //больше инфы

// setTimeout(function() {
//     console.log('Alina2')
// }, 1500) // вызывает функцию единожды по указанному времени

// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 2000) // вызывает функцию многоразово с интервалами по указанному времени

// Arrow Functions
// function greet(name) {
//     console.log('Hello - ', name)
// }
// перепишем:
// const arrow = (name, age) => {
//     console.log('Hello -', name, age)
// }

// const arrow2 = (name) => {
//     console.log('Hello -', name)
// } // можно без скобок у name

// function pow(num, exp) {
//     return Math.pow(num, exp)
// }
// перепишем:
// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow(2, 3))

// Default Parameters
// const sum = (a, b) => a + b

// console.log(sum(40, 2)) //42
// console.log(sum(40)) // NaN

// function sumAll(... numbers) {
//     // let res = 0
//     // for (let num of numbers) {
//     //     res += num
//     // }
//     // return res
//     return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// console.log(sumAll(1, 2, 5, 7, 9))

// Closures (Замыкание)

// function createPerson(name) {
//     return function(lastname) {
//         console.log(name + ' ' + lastname)
//     }
// }

// const addLastName = createPerson('Alina')
// addLastName('Baranova')
// addLastName('Petrova')