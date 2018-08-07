// const obj = {
//   name: 'Marcel',
// }

// const stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// const personString = '{"name": "Marcel", "age": 27}'
// const person = JSON.parse(personString)

// console.log(typeof person)
// console.log(person)

const fs = require('fs')

// Save note
const originalNote = {
  title: 'Some title',
  body: 'Some body',
}

const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

// Read note
const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)
