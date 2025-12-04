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

const obj = {
    dept_name : ["it" , "cs" , "Mech"] , 
    principle : "Arun" , 
    dept : {
        it:"karim",
        cs : "rohan"
    }
}

const {cs : c} = obj["dept"]
console.log(c); //for dict/object deconstruct

console.log({} = obj["dept_name"][0]); //for list


// Advance type of object known as map
// map is not iterable via for each , for in
const map = new Map()
map.set("IT","Vedant")
map.set("CS","Siddharth")
console.log(map.size)

// console.log(map.get("IT"))
for (const [key , value] of map) {
    console.log(key , " " , value);
}


// you cant iterate through normal obj via for of
// There are 3 types of for loop in js
// 1.for each ---> used to iterate through an array only. it doesnt allows pass , stop or continue
// 2.for of ---> used to iterate through iterables such as array , maps , strings , sets
// 3.for in ---> used to iterate through objects , arrays

const depts = {
    "IT":"Vedant",
    "CS":"Siddharth"
}
// for (const element of depts) {
//     console.log(element);
// }
for (const key in depts) {
    // if (!Object.hasOwn(object, key)) continue;
    console.log(key , " " , depts[key]);
    // const element = object[key];
}


// for each loop
// inside each loop it takes a call back function
// call back function means passsing a function within a function as arg

arr = ["abhi" , "sidd" , "ved" , "sak"]

// arr.forEach(function (naam){
//     console.log(naam)
// })

// arr.forEach( (naam) => {
//     console.log(naam)
// } );

// function name(naam){
//     console.log(naam)
// }
// arr.forEach(name);

arr.forEach( (naam, idx , array) => {
    console.log(naam , idx , array)
} );



// filter is used to iterate and to return a ele under certain condition
const numarr = [1,2,3,4,5,6,7,8]


const list = numarr.filter( (num , idx , numarr) => (num > 5))
console.log(list);
