const express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("how are you");
});
app.get('/home',(req,res)=>{
    res.send("welcome")
});
app.get('/contact',(req,res)=>{
    res.send("contact us");
});
app.listen(3000);
