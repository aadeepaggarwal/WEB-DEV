function khanaBanana(){
    console.log("Khana Banana Shuru");
    setTimeout(
        ()=>{
            console.log("Khana Bana Liya");
        },2000
    );
}

function SabziLana(cb){
    console.log("Sabzi Lana");
    setTimeout(
        ()=>{
            console.log("Sabzi Le aaye");
            cb();// iske call back ko chala do iske baad
        },2000
    );
}

//otherwise to ye khana banana pehle chalta, but call back add karkenge to pehle sabzi lana chalega
SabziLana(khanaBanana);