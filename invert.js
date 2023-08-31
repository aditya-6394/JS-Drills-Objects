function invert(obj) {
    let inv_obj = {};
    for(let k in obj){
        inv_obj[obj[k]] = k;
    }
    return inv_obj;
}

module.exports = invert;

