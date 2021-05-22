// const fs = require('fs')
// require('./appendNote')
// fs.writeFileSync('notes.txt', 'Welcome to Nodejs!')

const getNotes = require('./utils')

// const res = add(10, 16)
const result = getNotes()

console.log(result)
