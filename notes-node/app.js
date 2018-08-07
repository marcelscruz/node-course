console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

const res = notes.addNote()
console.log(res)

console.log(notes.add(1, 2))

// const user = os.userInfo()

// fs.appendFileSync(
//   'greetings.txt',
//   `Hello ${user.username}! You are ${notes.age}.`,
// )
