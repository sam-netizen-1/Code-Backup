// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'lal lal sanedo ';
//     }
// }
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "lal lal Sanedo";
}
const user1 = createUser('samkit', 'kothari', 'samkit@gmail.com', 22, "D22 neco harmony");
const user2 = createUser('deven', 'kothari', 'deven@gmail.com', 17, "D22 neco harmony");
const user3 = createUser('yogesh', 'bothara', 'yogesh@gmail.com', 21, "D22 neco harmony");
console.log(user1);
console.log(user1.is18());