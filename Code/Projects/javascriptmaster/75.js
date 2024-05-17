// arrow functions 
const user1 = {
    firstName : "samkit",
    age: 22,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}
user1.about(user1);