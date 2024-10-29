// when we pass a function as a argument in another function known as HOF(higher order function).

function fun(a)
{
    
    console.log("This is a fun function");
    a();
}
function test()
{
    console.log("this is a test function");
}
fun(test);


// when an outer function return an entire inner function is known as HOF.
function outer()
{
    let a=0;
    function inner(){
        // console.log("this is a inner function..");
        a++;
        console.log(a)
    }
    return inner;
}
let data = outer();
data()
data()
data()
data()

// let res = outer();
// res();





