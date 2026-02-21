// Set Timeout (Function, timeinMiliseconds)
setTimeout(
    function sayhello(){
        console.log("Hello");
    }
    ,5000
)// ab ye code 5 second ruk ke chalega tieput mein 5 seconds hai kyonki

console.log("Done"); // although ye baad mein ana chaiye tha but pehle ajyega because timeout of 5 seconds

//http://latentflip.com/loupe/?code=Ly8gU2V0IFRpbWVvdXQgKEZ1bmN0aW9uLCB0aW1laW5NaWxpc2Vjb25kcykNCnNldFRpbWVvdXQoDQogICAgZnVuY3Rpb24gc2F5aGVsbG8oKXsNCiAgICAgICAgY29uc29sZS5sb2coIkhlbGxvIik7DQogICAgfQ0KICAgICw1MDAwDQopLy8gYWIgeWUgY29kZSA1IHNlY29uZCBydWsga2UgY2hhbGVnYSB0aWVwdXQgbWVpbiA1IHNlY29uZHMgaGFpIGt5b25raQ0KDQpjb25zb2xlLmxvZygiRG9uZSIpOyAvLyBhbHRob3VnaCB5ZSBiYWFkIG1laW4gYW5hIGNoYWl5ZSB0aGEgYnV0IHBlaGxlIGFqeWVnYSBiZWNhdXNlIHRpbWVvdXQgb2YgNSBzZWNvbmRz!!!

// Set Interval
// setInterval(
//     function sayHello2(){
//         console.log("Hello")
//     }, 2000
// ) //runs 2 sec ruk ke infinitely until stopped using id
console.log("World"); // runs once

let id= setInterval(
    function sayHello2(){
        console.log("Hello")
    }, 2
);
setTimeout(
    ()=>{
        clearInterval(id);
    }, 5000// means 20 miliseconds 5000 miliseconds tak chalega utni par id retuen 250 bar
)