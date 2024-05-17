let array=[[{a:1},{a:1}],[{b:2},{b:2}]];
let length = array.length
for(let index=0;index<length;index++){
    let temp = array[index];
    array.push(...temp);
}
array = array.slice(length);
console.log(array);