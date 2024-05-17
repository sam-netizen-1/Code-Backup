// default parameters

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);