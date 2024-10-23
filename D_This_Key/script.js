console.log(this);

let obj1 = {
    name1 :"abc",
    fun:()=>{
        console.log(this.name1);
    }
}
obj1.fun();

let obj2 = {
    fname :"abc",
    lname : "gshgsdhgs",
    Id : 1231, 
    fun:function(){
        console.log(`first name is ${this.fname}`);
        console.log(`Last name is ${this.lname}`);
        console.log(`ID name is ${this.Id}`);
    }
}
obj2.fun();

function test()
{
    console.log(this);
}
test();

let test1=()=>this;
console.log(test1());


const game = {
    fullDetail:function (greet,test12){
        return `${greet} ${test12} ${this.title} ${this.year}`;
    },
};
const newGame = {
    title :"Krishna",
    year : 1993,
};

const fullDetail = game.fullDetail.apply(newGame,["welcome","Hello"]);
console.log(fullDetail);