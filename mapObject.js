let cb = require('./test/testMapObject')
function mapObject(obj, cb) {
    for(let i in obj){
        cb(i);
    }
}

module.exports = mapObject;