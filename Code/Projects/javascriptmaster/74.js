const user1 = {
    firstName : "Samkit",
    age: 22,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}
const myFunc = user1.about.bind(user1);
myFunc();