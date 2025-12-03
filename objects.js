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
