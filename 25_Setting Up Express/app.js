const express= require('express');
const app=express();

// 4444 is any posrt we can even give any number between 4000 to 16000
app.get('/',(req,res)=>{
    res.send("Hello World");

})
app.get('/hello',(req,res)=>{
    res.send("Program Started");

})
// querry method
// jo localhost postman link mein name denge wahi jayega iss neeche wale mein params mein
// localhost:4444/greetings?name=Aadeep&last=Aggarwal // to jo name yaha dala wahi value hai uss key ki
app.get('/greetings',(req,res)=>{
    const {name}=req.querry;
    res.send(`Hi ${name}`);

})

// params method
// localhost:4444/greet/Aadeep/Aggarwal
app.get('/greet/:name/:lastname',(req,res)=>{
    const {name, lastname}=req.params;
    res.send(`Hi ${name}`);

})
app.listen(4444, function(){
    console.log("Running on port number",4444)
})
