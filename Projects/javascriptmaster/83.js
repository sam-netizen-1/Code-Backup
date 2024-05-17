// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "lal lal Sanedo ";
}

const user1 = createUser('samkit', 'kothari', 'samkit@gmail.com', 22, "D22 neco harmony");
const user2 = createUser('deven', 'kothari', 'deven@gmail.com', 19, "D22 neco harmony");
const user3 = createUser('yogesh', 'bothara', 'yogesh@gmail.com', 21, "D22 neco harmony");
console.log(user1);
console.log(user1.is18());