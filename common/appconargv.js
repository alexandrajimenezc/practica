let myArgs = process.argv.slice(2);
const triple = require('./triple');

console.log(triple(myArgs[0]))
console.log(`: ${myArgs}`)

