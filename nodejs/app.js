const express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("how are you");
});
app.get('/home',(req,res)=>{
    res.send("<h1>welcome</h1>")
});
app.get('/contact',(req,res)=>{
    res.send('[{"name":"jerry","age:32},{"name":"tom","age":32}]');
});


app.listen(3000);

