function invert(obj) {
    let invObj = {};
    for(let k in obj){
        invObj[obj[k]] = k;
    }
    return invObj;
}

module.exports = invert;

