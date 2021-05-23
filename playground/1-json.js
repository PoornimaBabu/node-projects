const fs = require('fs')

// const names = {
//     firstName: 'Poornima',
//     lastName: 'Babu'
// }

// const JSON_data = JSON.stringify(names)

// fs.writeFileSync('1-JSON.json', JSON_data)

const buffer = fs.readFileSync('1-JSON.json')
const data_JSON = buffer.toString()
const data = JSON.parse(data_JSON)
// console.log(data)

data.firstName = "Saran"
data.age = 27
const updData = JSON.stringify(data)
fs.writeFileSync('1-JSON.json', updData )