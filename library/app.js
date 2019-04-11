const express=require('express');
const chalk=require('chalk');

var app= new express();//objct creatn
const booksRouter=express.Router();
const authorRouter=express.Router();

const path=require('path')
app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")));

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{
        nav:[
            {link:'/books',title:'BOOKS'},
            {link:'/authors',title:'AUTHORS'}],title:"Books"})           
});
authorRouter.route('/')
.get((req,res)=>{
    res.render('author',{
        nav:[
            {link:'/books',title:'BOOKS'},
            {link:'/authors',title:'AUTHORS'}],title:"Author"})
        
 });
 app.use('/authors',authorRouter)

booksRouter.route('/single')
.get((req,res)=>{
    res.send("HELLOMSINGLE BOOJK")
})
app.use('/books',booksRouter)


app.get("/",function(req,res){
    res.render('index',{
        nav:[
            {link:'/books',title:'BOOKS'},
            {link:'/authors',title:'AUTHORS'}],title:"Library"});
});
app.listen(3000,function(){
 console.log('listening to port'+chalk.green('3000'))
});
