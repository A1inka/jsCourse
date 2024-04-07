// console.log(new Date()) // получаем текущие дата и время (строка)

// const start = new Date(1000 * 60 * 60 * 24 * 365)

// const date = new Date(2011, 0, 4, 12, 42, 12)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getSeconds())
// и т.п...

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())

// ======

let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

setInterval(update, 1000)
update()

function update() {
    output.textContent = format(mode)
}

// Pure Function
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time': 
            return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return
    }
}