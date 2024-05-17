// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "samkit"},
    {userId : 2, userName: "deven"},
    {userId : 3, userName: "yogesh"},
    {userId : 4, userName: "yash"},
    {userId : 5, userName: "naman"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);