// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Sam",
    age: 22,
    about: personInfo
}
const person2 = {
    firstName : "Dev",
    age: 20,
    about: personInfo
}
const person3 = {
    firstName : "yash",
    age: 23,
    about: personInfo
}

person1.about();
person2.about();
person3.about();