const express= require('express');
const path= require('path');
const app= express();


app.use('/', express.static(path.join(__dirname,'public'))); // can change [ublic folder name to something else]
app.use(express.urlencoded({extended:true}));
app.get('/greet/:name',(req,res)=>{
    const {name}=req.params;
    res.send(`Hello ${name}`)
})
// req.body
app.post('/profile', (req,res)=>{
    console.log(req.body);
    const {name, dsaquestions, age}= req.body;

    res.send(`Success: ${name} ${dsaquestions} ${age}`);
});
app.listen(4444, function(){
    console.log("http://localhost:4444/");
}) // now automatically it runs index.html and usme se css js khud run ho jayegi jo internally linked hogi uske

// do nodemon app.js in this directory to run it