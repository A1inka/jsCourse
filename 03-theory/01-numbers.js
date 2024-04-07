// const num = 42
// const float = 42.42
// const pow = 10e3
// const big = 1_000_000
// const negative = -10

// console.log(Number.MAX_SAFE_INTEGER) 9007199254740991
// console.log(Math.pow(2, 53) - 1) 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER) -9007199254740991
// console.log(Number.MAX_VALUE) 1.7976931348623157e+308
// console.log(Number.MIN_VALUE) 5e-324
// console.log(Number.POSITIVE_INFINITY) Infinity
// console.log(Number.NEGATIVE_INFINITY) -Infinity
// // console.log(1 / 0)
// console.log(Number.isFinite(Infinity)) false
// console.log(20 / undefined) NaN
//console.log(Number.isNaN(weird))
// console.log(Number.isNaN(12)) false

const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(parseInt(strInt))
// console.log(parseFloat(strFloat))
// console.log(+strInt, +strFloat)

// console.log(parseFloat((0.1 + 0.2).toFixed(10)))
// console.log(parseFloat(fixed))

// BigInt можно работать только с BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n)
// console.log(-42n) 
// console.log(42.42n) error

// console.log(10n - 4) error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2
// console.log(5 / 2) // 2.5

// Math
// console.log(Math.E)
// console.log(Math.PI)

const myNum = 2.1

// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.abs(24))
// console.log(Math.max(2, 5, 42, 199, 0))
// console.log(Math.min(2, 5, 42, 199, 0))
// console.log(Math.floor(myNum)) // 2
// console.log(Math.ceil(myNum)) // 3
// console.log(Math.round(myNum)) // в зависимости от числа округление
// console.log(Math.trunc(myNum)) // целая часть
// console.log(Math.random())

// function getRandomNumber(min, max) {
//     return Math.random() * (max - min + 1) + min
// }

// const num1 = getRandomNumber(10, 100)
// console.log(num1)