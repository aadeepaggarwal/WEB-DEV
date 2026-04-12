const express= require('express');
const path= require('path');
const app= express();

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })
// linking CSS or JS or any other file in HTML is a separate
// request to the server, means html agar css mangega to pass it separately below in code

// app.get('/page', (req,res)=>{
//     // console.log(__dirname);
//     res.sendFile(path.join(__dirname,'index.html'));
// })

// to start the server we have to use listen
// app.get('/style.css', (req,res)=>{
//     // console.log(__dirname);
//     res.sendFile(path.join(__dirname,'style.css')); // this is for css if html calls it then also we need it
// })

// instead of sending all fles use public folder 
app.use('/', express.static(path.join(__dirname,'public'))); // can change [ublic folder name to something else]
app.listen(4444, function(){
    console.log("http://localhost:4444/");
}) // now automatically it runs index.html and usme se css js khud run ho jayegi jo internally linked hogi uske

// do nodemon app.js in this directory to run it