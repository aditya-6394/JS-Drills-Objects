const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

let keys = require('../keys')

console.log(keys(testObject));

module.exports={testObject};