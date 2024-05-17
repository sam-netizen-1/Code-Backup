function myFunc(){
    function hello(){
        return "Hello World"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());