function keys(obj) {
    const arr =[];
    for(let k in obj){
        arr.push(k);
    }
    return arr;
}
module.exports=keys;