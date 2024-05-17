function filter(array, Func) {    
    const filteredArray = [];  
    for(let index=0;index<array.length;index++) {        
        const result = Func(array[index]);        
        if(result){             
        filteredArray.push(array[index]); 
        }    
    }    
    return filteredArray;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EvenElementsArray = filter(arr, num => num % 2 === 0);
console.log("Even Elements of Array Are : " +EvenElementsArray);