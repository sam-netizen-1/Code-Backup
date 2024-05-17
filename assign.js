const array =[{name : "Samkit", age : 22},{name : "Yogesh", age : 23},{name : "Deven", age : 20}];
console.log(array);
let nameArray = array.map(({ name }) => ({name}))
console.log(nameArray);
