function singHappyBirthday(){
    console.log("Happy Birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(4));

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("abc"));

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans);