// and  or operator 



// if(firstName[0] === "S"){
//     console.log("your name starts with S")
// }

// if(age > 18){
//     console.log("you are above 18 years of age");
// }

// if(firstName[0] === "S" && age>18){
//     console.log("Name starts with S and age is above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "amkit";
let age = 16;

if(firstName[0] === "S" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}