const express= require('express');
const jwt = require('jsonwebtoken')
const bodyParser=require('body-parser');
const path =require('path');
var cors=require('cors')
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/",express.static(path.join(__dirname,"public")))
app.use("/login",(req,res,next)=>{
       console.log("form data",req.body); 
       let staticUserName="Gourav";
       let staticPassoword="123123";
       if(req.body.uname==staticUserName && req.body.psw==staticPassoword)
    {
            
       const token = jwt.sign({
              userName:req.body.uname,
            },"my_secret_key", {
              expiresIn: "1h"
            })
            res.status(200).send({
              token: token,
              expiresIn: 3600,
              user: req.body.uname
            })
       
     } 
     else{
            res.status(401).send({message:"Invalid UserName or Password"})
     } 
})
app.use((req,res,send)=>{
       res.sendFile(path.join(__dirname,'public','index.html'))
})
module.exports=app;