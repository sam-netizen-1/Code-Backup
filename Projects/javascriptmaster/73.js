function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Samkit",
    age: 22,   
}
const user2 = {
    firstName : "Yogesh",
    age: 21,
    
}

about.apply(user1, ["cricket", "krsna"]);
const func = about.bind(user2, "badminton", "emiway");
func();