// block scope vs function scope 
// let and const are block scope
// var is function scope 
function myApp(){
    if(true){
        var firstName = "Samkit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();