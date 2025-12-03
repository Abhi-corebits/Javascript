//  Falsy Values
// false , 0 , -0 , null , '' , "" , BigInt 0n , undefined , NaN

//  Truthy Values
// true , "0" , " " , ' ' , "false" , [] , {} , function(){}

arr = []
if(arr.length == 0)
    console.log("array empty");

obj = {}
if(Object.keys(obj).length===0)
    console.log("object empty");


//  Nullish coalescing operator (??)
// SYANTAX =  val1 ?? default_val
// if val1 is null , undefined then default val gets used

console.log(2 ?? 4);
console.log( null ?? 4);
console.log(null ?? undefined ?? 10);