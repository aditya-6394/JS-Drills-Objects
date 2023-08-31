const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let mapObject = require('../mapObject');
let arr=[];
function cb(i){
    arr.push(i);
}
mapObject(testObject,cb);
console.log(arr);
module.exports=cb;