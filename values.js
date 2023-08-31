function values(obj) {
    let arr=[];
    for(let k in obj){
        arr.push(obj[k]);
    }
    return arr;
}
module.exports=values;