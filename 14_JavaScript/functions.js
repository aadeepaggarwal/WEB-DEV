// Function
function say_hello(){
    console.log("Hello");
}

say_hello();

// function as an argument

let x= function say_hello(NAME){
    console.log("Hello", NAME);
}

x("Aadeep")

// Sum Function
function sum(a,b){
    return a+b;// if a and b not defined then NaN ayega: Not a number, nut error nahi ayega
}
console.log(sum(10,29));
console.log(sum(10));

// Default value give, means if nothing then that, always give default peeche se

function sum2(a=0,b=0){
    return a+b;// if a and b not defined then NaN ayega: Not a number, nut error nahi ayega
}
console.log(sum2(10,29));
console.log(sum2(10));// a 10 ho jayega b 0 automatically