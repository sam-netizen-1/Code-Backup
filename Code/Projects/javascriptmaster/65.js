// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// myArray.splice(1, 0,'inserted item');

const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);