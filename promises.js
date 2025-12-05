new Promise( (resolve , reject) => {
    setTimeout( () => {
        console.log("Task 1 completed")
        resolve()
    } , 1000 );

}).then( () => {
    console.log("Task took 3s to complete");
})

new Promise( (resolve , reject) => {
    setTimeout( () => {
        console.log("Task 2 completed")
        resolve({username:"Abhi" , email:"abhi@gmail.com"})
    } , 1000 );

}).then( (username) => {
    console.log(`Task took 3s to complete. Task user : ${username.username} , Task user's email :${email} `);
}).catch((error) => {
    console.log(`ERROR: ${error}`)
}).finally(() => {
    console.log("Finally the promise is wither be resolved or rejected");
})