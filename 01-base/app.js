// let num = 20 //number
// let firstName = 'Alina' //string
// const isProgrammer = true //boolean

/* Can Do
let $ = 'test'
let $num = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Marina' */

/* Restricted
let 42num = '11'
let my-num = 1
let false */

// firstName = 'Nastya'
// isProgrammer = false

// alert(firstName) вывод окно
// console.log('Test: ', num, isProgrammer)

/* Операторы
console.log(num + 10)
console.log(num - 10)
console.log(num / 10)
console.log(num * 10)
console.log(num) */

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 - 1 
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (3 - 1)
// console.log(num3)

// const fullName = firstName + 'Baranova'
// const fullName = firstName + ' Baranova'

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = 42

// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

submitBtn.onclick = function () {
    if (action == "+") {
        const sum = Number(input1.value) + Number(input2.value)
        if (sum < 0) {
            resultElement.style.color = 'red'
        }
        else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = sum
    }
    else if (action = "-") {
        const sum = Number(input1.value) - Number(input2.value)
        if (sum < 0) {
            resultElement.style.color = 'red'
        }
        else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = sum
    }
}