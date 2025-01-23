const express=require('express')
const app=express()
const mongoose = require('mongoose');
const Employee= require('./models/Employee.model')
require('dotenv').config()
app.use(express.json())
const employeeRoute=require('./routes/Employee.route')
const adminRoute=require('./routes/Admin.route')
app.use(express.urlencoded({extended:false}))
app.use('/Employee',employeeRoute)
app.use('/Admin',adminRoute)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("database is connected")
   
}).catch((err)=>{
   console.error(err); 
})
app.listen(3000,()=>{
    console.log('the server has started');
});

app.get('/',(req,res)=>{
    res.send("hello from CoderHouse")
})
