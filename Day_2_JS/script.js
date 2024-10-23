//Sum
let Sum = (a,b)=>{
    return a+b;
}
console.log(Sum(2,5));

//factoeial
let factorial = (N)=>{
    let fact=1;
    for(let i=1;i<=N;i++){
        fact*=i;
    }
    return fact;
}
console.log(factorial(5));

//square
let square=n=>n*n;
console.log(square(4));

let obj1={
    fun:()=>{
        console.log("this is a fun function")
    },
    sq1:(a)=>a*a
}
obj1.fun();
console.log(obj1.sq1(4));