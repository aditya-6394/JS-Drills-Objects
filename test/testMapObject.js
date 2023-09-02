const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let obj = require('../mapObject');
// let cb = require('../mapObject')

console.log(obj.mapObject(testObject,obj.cb));
