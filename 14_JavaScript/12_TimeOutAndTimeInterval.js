// Set Timeout (Function, timeinMiliseconds)
setTimeout(
    function sayhello(){
        console.log("Hello");
    }
    ,4000
)// ab ye code 4 second ruk ke chalega timeout mein 5 seconds hai kyonki

setTimeout(
    function sayhogaya(){
        console.log("Ho Gaya");
    }
    ,3000
)
// even if yaha 3000 timeout hai koi gaurantee nahi ki ye 5000 wale se pehle chal jaye, ye js pe relative hota hai
console.log("Done");

function waitAsec(){
    let t= new Date().getTime();
    while(new Date().getTime()-t<1000){
        // do nothing
    }
}

function waitNsec(n){
    for(let i=0; i<n;i++) waitAsec(); // calling this function of 1s wait n times for n seconds wait
}
waitNsec(5); // ab ye 5 sec rukwa raha hai, to upar 3s and 4s wala zaruri nahi 3 aur 4s hi ruke, it will have to wait more and anyone can be executed before any other