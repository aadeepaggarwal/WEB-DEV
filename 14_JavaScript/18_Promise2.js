setTimeout(()=>{
    console.log("Hi, From SetTimeout");
},0)

let p=new Promise((res,rej)=>{
    res("Hey, I am resolved");
})

p
    .then((msg)=>{
        console.log(msg)
    })
    .catch(err=>{
        console.log(err)
    })

console.log("Hello World") 

// Output will be
/*
Hello World
Hey, I am resolved
Hi, From SetTimeout

Because hello world seedha call stackl mein pehle ayega directly queue se and event loop promise wali statement tab hi dalega jab thread khali hoga
and end mein timeout waghara as it is macroqueue se kam priority pe
*/

/* EXAMPLE of using promise as return statement 
setTimeout(() => {
    console.log("Hi From setTimeout");
}, 0)

let p = new Promise((res, rej) => {
    res("Hey! i am resolved");
})

p
    .then((msg) => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })

console.log("Hello World");
*/