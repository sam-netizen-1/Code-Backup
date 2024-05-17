let array=[[{a:1},{a:1}],[{b:2},{b:2}]];
let result=[];
for(temp of array){
    if(!Array.isArray(temp)){
        result.push(...temp)
        array.shift()
    }
}
array = result;
console.log(array);