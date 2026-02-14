// HIGHER ORDER FUNCTION
function getFun(){

    function World(){
        console.log("Hi From World");
    }
    return World; // simply return world function
    // return World(); this first calls world and prints "Hi from world", then returns undefined because world returns nothing
}

let x= getFun(); // x mein World store ho jayega
x(); // print hoga function mein jo store hua

// CLOSURE PROPERTY
 function getfun(){
    
    let x=10;
    function fun2(){
        x++;
        console.log(x);
    }

    return fun2;
 }

 let f=getfun(); // closure property se x comes as object f amein fun2 ke andar scope mein so 10+1=11 print hoga
 f();
 f(); // 2nd time 11+1=12 ho jayega