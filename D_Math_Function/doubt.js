console.log(this);

function fun() {
    console.log(this);
}
fun();
let fun1=()=>{
    console.log(this);
}

fun1();
let obj1 = {
    name:"abc",
    fun2:()=>{
        console.log(this.name);
    }
}
obj1.fun2();



let user={
    Name:"rohit",
    ID:1322,
    sayname:function(){
        console.log(greet+" "+this.Name+" "+this.ID);
    }
}
let user1={
    Name:"rohan",
    ID:1352,
}
