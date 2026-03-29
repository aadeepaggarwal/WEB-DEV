const express= require('express');
const app=express();

// 4444 is any posrt we can even give any number between 4000 to 16000
app.get('/',(req,res)=>{
    res.send("Hello World");

})
app.get('/hello',(req,res)=>{
    res.send("Program Started");

})
app.listen(4444, function(){
    console.log("Running on port number",4444)
})
