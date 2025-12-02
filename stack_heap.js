let name = "abhi"
// console.log(name)
let newname = name;
// console.log(newname)

newname = "abhinav" 
// console.log(name)
// console.log(newname)

let user = {
    "name":"abhi" ,
    "age":19
}

// console.log(user.name , user.age);
user2 = user
// console.log(user2.name , user2.age);

user2.name = "Sidd"

// console.log(user.name , user.age);
// console.log(user2.name , user2.age);

// console.log(newname.slice(-5 , 2));

// Object literals 
const mysy = Symbol("symbol_one")
const data = {
    [mysy] : "hey",  // If we want to use symbol datatype in a object
    name : "Abhi" ,
    age : 19 ,
    days : ["Sunday" , "Monday"]
}

console.log(data[mysy]);
console.log(typeof data[mysy]);
console.log(data["days"]);

