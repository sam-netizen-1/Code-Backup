const nextElement = (Array,startPoint) =>() =>Array[++startPoint];
primeArray =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const primeAfter = nextElement(primeArray,4);
console.log(primeAfter());
console.log(primeAfter());
console.log(primeAfter());
evenArray =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100.]
const evenAfter = nextElement(evenArray,10);
console.log(evenAfter());
console.log(evenAfter());
console.log(evenAfter());