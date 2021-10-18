const { Strings } = require('cafe-utility')

console.log(Strings.randomAlphanumeric(parseInt(process.argv[2], 10) || 0))
