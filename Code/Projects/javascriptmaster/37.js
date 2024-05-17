// difference between dot and bracket notaion
const key = "Email";
const person = {
    name: "Samkit",
    age: 22,
    "person hobbies": ["cricket", "movies", "listening music"]
}
console.log(person["person hobbies"]);
person[key] = "samkit.kothari@gmail.com";
console.log(person);