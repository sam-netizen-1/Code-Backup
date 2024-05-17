let array=[[{a:1},{a:1}],[{b:2},{b:2}]];

array.forEach((arr2,index) => {
    array.push(...arr2[index])
    array.shift()
});

console.log(array)