/* Theory (массивы)

Способы задания массивов
const array = [1, 2, 5, 3, 30]
const arrayStrings = ['a', 'c', 'e', null, 54] массив - это 'контейнер", может хранить разные типы данных
const array = new Array(1, 2, 5, 3, 30, 47, 125)

console.log(array.length)
console.log(array[0])
console.log(array[array.length - 1]) 
array[0] = 'Privet!' 
console.log(array)

Так не стоит делать!!!
array[array.length] = 'smth' 
*/

/* Theory (объекты)
const person = {
  firstName: 'Alina',
  lastName: 'Baranova',
  year: 2004,
  fromPoliteh: true,
  languages: ['ru', 'en', 'de'],
  getFullName: function () {
    console.log(person.firstName)
  },
}
console.log(person.year)
console.log(person['languages'])
person.fromPoliteh = false
pesron.getFullName 
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: 'note 1',
    completed: false,
  },
  {
    title: 'note 2',
    completed: true,
  },
]

function render() {
  listElement.innerHTML = ''
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Нет элементов</p>'
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
  }
}

render()

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  }
  notes.push(newNote)
  inputElement.value = ''
  render()
}

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    }
    else if (type === 'remove') {
      notes.splice(index, 1)
    }
  }

  render()
}

function getNoteTemplate(note, index) {
  return  `
  <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
      <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
      </span>
    </li>
  `
}