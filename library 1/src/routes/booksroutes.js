const express=require('express');
const booksRouter=express.Router();
var app= new express();//objct creatn

function router(nav){
var books=[
    {
        title:"BHOOMIYUDE AVAKASHIKAL",
        genre:"comedy",
        author:"VAIKOM MUHAMMED BASHEER"
    },
    {
        
            title:"MELUHA",
            genre:"FANTASY",
            author:"AMISH"
    },
    {
        title:"GIRL IN ROOM NUMBER 101",
        genre:"NOVEL",
        author:"CHETAN BHAGATH"
    },
    {
        title:"AADU JEEVITHAM",
        genre:"NOVEL",
        author:"BENYAMIN"
    },
]
booksRouter.route('/')
.get((req,res)=>{
    res.render('books',
    {
        nav,
        title:"Books",
        books
        })          
});

booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;
    res.render(
        'book',
        {
            nav,
            title:"BOOKS",
            book:books[id]
        });
 })

return booksRouter;
}
module.exports=router;