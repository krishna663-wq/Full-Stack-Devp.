let arr = [1,2,"gsdgd","sgxgx",true];
console.log(arr);
console.log(typeof(arr));



// insert the element at the last
arr.push(10);
console.log(arr);

// insert element at begin
arr.unshift(113);
console.log(arr);

//remove element from last
arr.pop();
console.log(arr);

//remove element from begin
arr.shift()
console.log(arr)

console.log(arr.indexOf(true))


let arr2 = [12,556,"ggxg","gsgsg"];
arr.concat(arr2);
console.log(arr.concat(arr2));


//convert arr into string
let res = arr2.join(" ")
console.log(res)
console.log(typeof(arr))

//convert string into array
let ans = res.split(" ");
console.log(ans);
console.log(typeof(ans));

// reverse an array
arr.reverse()
console.log(arr)