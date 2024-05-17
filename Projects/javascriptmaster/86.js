class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "lal lal Sanedo ";
    }

}
const user1 = createUser('samkit', 'kothari', 'samkit@gmail.com', 22, "D22 neco harmony");
const user2 = createUser('deven', 'kothari', 'deven@gmail.com', 17, "D22 neco harmony");
const user3 = createUser('yogesh', 'bothara', 'yogesh@gmail.com', 21, "D22 neco harmony");
console.log(Object.getPrototypeOf(user1));