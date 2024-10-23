let str ="the sky is blue";

// op str = "blue is sky the"
let ans = str.split(" ").reverse().join(" ");;
console.log(ans)

let res = str.split(" ");
console.log(res);
let str1="";

for(let i=0;i<res.length;i++)
{
    str = str1+res[i].split("").reverse().join("")+" ";
    console.log(res[i].split("").reverse().join(""));
}
console.log(str1);

// object -> key value pair

let Person={
    name1:"abc",
    age:19
}
console.log(Person)
console.log(typeof(Person))
console.log(Person.age)
console.log(Person.name1)





//function
function sum1(a,b) {
    let c =0;
    c = a+b;
    return c;
}
console.log(sum1(19,"abc"))


// write a function to get sum_upto_n
function sum(n){
    return (n*(n+1))/2;
}
console.log(sum(5));

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
console.log(factorial(5)); 

//write a function to get value of nCr = n!/r!(n-r)!

function nCr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  console.log(nCr(5, 2));
