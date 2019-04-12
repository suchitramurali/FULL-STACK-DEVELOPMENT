const express=require('express');
const chalk=require('chalk');
const path=require('path')

const authorRouter=express.Router();
var app= new express();//objct creatn


app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")));
app.use('/authors',authorRouter)
const nav=[

    {link:'/books',title:'BOOKS'},
    {link:'/authors',title:'AUTHORS'},
    {link:'/addbook',title:'ADD BOOK'}];

    const booksRouter=require('./src/routes/booksroutes')(nav);//PASSING VALUES 
    app.use('/books',booksRouter)
    const adminRouter=require('./src/routes/adminroutes')(nav)
    app.use("/addbook",adminRouter)

app.get("/",function(req,res){
    res.render('index',{
        nav,
        title:"Library"});
});

authorRouter.route('/')
.get((req,res)=>{
    res.render('author',{
        nav,
        title:"Author"})
        
 });

app.listen(3000,function(){
 console.log('listening to port'+chalk.green('3000'))
});
