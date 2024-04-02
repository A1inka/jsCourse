const names = ['Алина', 'Богдан', 'Полина', 'Даня']

// names.push('Настя') положить в конец массива заданный элемент
// names.unshift('Настя') положить в начало, работает медленнее, тк все элементы меняют индекс

// const name = names.shift('Настя') достает первый элемент массива и возв его значение
// const name = names.pop() достает последний элемент массива и возв его значение

// console.log(names, reverse()) перевертыш
// const reversed = names.toReversed()
// console.log(reversed)
// console.log(names)
// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters)
// console.log(letters.sort())

// console.log(names.splice(0, 2))
// console.log(names.toSpliced(0, 2))
// console.log(names)

// const greatWoman = 'Алина'
// const index = names.indexOf(greatWoman)
// console.log(index)
// const newNames = names.with(index, 'Алинка')
// names[index] = 'Алинка'
// console.log(names[index])
// console.log(names)
// сoncole.log(newNames)

// запомнить
// const capitalNames = names.map(function(name, index) {
//     if (index === 1) {
//         return 'Алинка'
//     }
//     return name
// })
// console.log(capitalNames)

// 2 способа
// console.log(names.includes('Алина'))
// console.log(names.indexOf('Алина!') !=== -1)

const people = [{
    name: 'Алина',
    budget: 4200
},
{
    name: 'Богдан',
    budget: 12200
},
{
    name: 'Полина',
    budget: 7640
},
{
    name: 'Даня',
    budget: 200
}
]

// console.log(people.indexOf({ name: 'Полина', budget: 7640}))

// let findedPerson

// for (let person of people) {
//     if (person.budget === 7640) {
//         findedPerson = person
//     }
// }

// const findedPerson = people.find(function(person) {
//     if (person.budget === 7640) {
//         return true
//     }
// })

// const finded = people.findIndex(function (person) {
//     return person.budget === 7640
// })
//console.log(finded)
//console.log(people.with(finded, 42))

// const finded = people.find((p) => p.budget === 7640)

// let sumBudget = 0
// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function (p) {
//     sumBudget += p.budget
// })

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// //чет сложное
// const sumBudget = people
//     .filter(p => p.budget > 5000)
//     .map(p => p.budget)
//     .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

// const sumBudget = people

// по приколу
// const string = "Привет, как дела?"
// const reversed = string
// .split('')
// .toReversed()
// .join('!')
// .split('')
// .filter((c) => c !== '!')
// .join('')


// console.log(reversed)