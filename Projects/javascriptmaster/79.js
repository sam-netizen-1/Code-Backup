const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'lal lal sanedo ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('samkit', 'kothari', 'samkit@gmail.com', 22, "D22 neco harmony");
const user2 = createUser('deven', 'kothari', 'deven@gmail.com', 19, "D22 neco harmony");
const user3 = createUser('yogesh', 'bothara', 'yogesh@gmail.com', 21, "D22 neco harmony");
console.log(user1);
console.log(user1.about());
console.log(user3.sing());