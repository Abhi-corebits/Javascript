function name_is(n) {
    console.log(`Your name is ${n}`)
    
}
name_is("abhi")

function num(num1) {
    return num1
}
console.log(num(5 , 3 , 4))

function num_adv(...num1) {    //... is known as spread operator but also rest operator 
    return num1                // A rest operator takes all the arguments and store it
}                              // in a single array
console.log(num_adv(5 , 3 , 4))



// Another way of declairng a func
const name = function(naam){
    console.log(`your name is ${naam}`);   
}
name("abhinav")



// Arrow Function (one more way of dec func )
// const adv_name = (naam) => console.log(`your name is ${naam}`);   
// adv_name("siddharth")

( (naam) => {
    return console.log(`your name is ${naam}`);   
} ) ( "siddharth" );


const add = (n1 , n2 ) => (n1 + n2)
res =  add(2,3)
console.log(res);



// Quick execution of a function 
// SYNTAX : ()();

( (your_name) => (console.log(`Hey , ${your_name}`)) ) ("Abhi") ;