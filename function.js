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


// Arrow Function
