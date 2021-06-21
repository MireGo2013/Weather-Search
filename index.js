const fs = require('fs');

const data = `Hello
From Node`

fs.writeFileSync('nodejs.txt', data)

const result = fs.readFileSync('nodejs.txt', { encoding: 'utf-8' })

console.log(__filename)
console.log(__dirname)