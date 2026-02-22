/*
Promise
Statement of promise
State when promise is supposed to happen
Final state of promise fulfil or not

3 states of promise: Pending, fulfil, rejected 
*/

let p= new Promise(function(resolve, reject){
    // syntax hai ye resolve reject wala
    let num=17;
    if(num %2==0){
        resolve("Even Number Found");
    }
    else{
        reject("Promise rejected");
    }
})

/*
p.then(define resolve)
 .catch(define reject)

shortcut:

p.then(resolveFunction, RejectFunction);
*/

// 1. Way
p.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
})

console.log("Hello World") // ye pehle ajayega because ye queue mein jayega pehle
// there is a priority queue, and then promises ka task then settimeoutif there 