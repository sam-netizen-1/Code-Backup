// objects reference type  
// arrays are good but don't have sufficient information
// objects store key value pairs 
// objects don't have index
const person = {
    name: "samkit",
    age: 22,
    hobbies: ["cricket", "movies", "listening music"]
}
console.log(person);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);
person["person"] = "male";
console.log(person);