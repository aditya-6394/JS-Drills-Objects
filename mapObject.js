function cb(value){
    return value+"changes";
}

function mapObject(obj, cb) {
    const result = {};
    for(let key in obj){
        const oldValue = obj[key];
        const newValue = cb(oldValue);
        result[key] = newValue;
    }
    return result;
}

module.exports.mapObject = mapObject;
module.exports.cb = cb;