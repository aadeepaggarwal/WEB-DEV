let p1= new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Hey from Promise 1")
    }, 2000);
});

let p2= new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Hey from Promise 2")
    }, 1000);
});
// can pass as many argumentd of promise like p1 p2 p3... as we want becausr this is an array
Promise.all([p1,p2]) // if all kardunga to sabka aane pe print hoga, race pe jo pehle hua bas uska print hoga
    .then(
        data=>{
            console.log(data);
        }
    )