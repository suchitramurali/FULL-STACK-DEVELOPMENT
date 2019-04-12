const express=require('express');
const adminRouter=express.Router();


function router(nav){
    
    adminRouter.route('/')
    .get((req,res)=>{
        res.render('addbook',
        {
            nav,
            title:"ADMIN",
            
            })          
    });
    
    adminRouter.route('/add')
    .get((req,res)=>{
        res.send("inserting books ....");
    
    });
    return adminRouter;
}
    module.exports=router;