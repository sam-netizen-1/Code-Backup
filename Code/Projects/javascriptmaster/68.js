// Maps
// const person = {
//     firstName : "Samkit",
//     age: 22,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Samkit');
// person.set('age', 22);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "Samkit"
}
const person2 = {
    id: 2,
    firstName: "Isha"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 22, gender: "male"});
extraInfo.set(person2, {age: 21, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);