// const userNames = ['samkit', 'abcd', 'yash', 'yogesh', 'aabc', 'ABC', 'Samkit'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

const products = [
    {productId: 1, produceName: "p1",price: 600 },
    {productId: 2, produceName: "p2",price: 2800 },
    {productId: 3, produceName: "p3",price: 400 },
    {productId: 4, produceName: "p4",price: 7000 },
    {productId: 5, produceName: "p5",price: 800 },
]

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

const users = [
    {firstName: "Samkit", age: 23},
    {firstName: "Deven", age: 20},
    {firstName: "Yogesh", age: 22},
    {firstName: "Isha", age: 21},
]

users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});

console.log(users);