// const user1 = {
//     firstName : "samkit",
//     age: 20,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

const user1 = {
    firstName : "samkit",
    age: 20,
    about(){
        console.log(this.firstName, this.age);
    }   
}

user1.about();