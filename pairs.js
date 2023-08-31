function pairs(obj) {
    let arr = [];
    for(let k in obj){
        arr.push([k,obj[k]]);
    }
    return arr;
}

module.exports = pairs;