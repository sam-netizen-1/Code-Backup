// nested if else

// winning number 15 

// 15 your guess is right 
// 12 too low 
// 18 too high 

let winningNumber = 15;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}