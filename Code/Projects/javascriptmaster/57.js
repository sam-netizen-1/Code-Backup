// map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "Samkit", age: 23},
    {firstName: "Deven", age: 20},
    {firstName: "Yogesh", age: 22},
    {firstName: "Isha", age: 21},
]
const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);