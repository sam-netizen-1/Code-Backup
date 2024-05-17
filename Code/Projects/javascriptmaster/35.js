// array destructuring 
const myArray = ["value1", "value2", "value3","value4"];
// let var1 = Array[0];
// let var2 = Array[1];
// console.log("value of var1", var1);
// console.log("value of var2", var2);
let [var1, var2, ...NewArray] = Array;
console.log("value of var1", var1);
console.log("value of var2", var2);
console.log(NewArray);