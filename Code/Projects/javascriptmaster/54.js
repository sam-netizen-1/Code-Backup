// callback functions 

function myFunc2(name){
    console.log("Inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("Hello there I am a function and I can..")
    callback("Samkit");
}
myFunc(myFunc2);