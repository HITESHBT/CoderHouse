const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const Admin= require('../models/Admin.model')
require('dotenv').config()
const JWT_SECRET=process.env.JWT_SECRET
const registerAdmin=async (req,res)=>{
    try {
        const {username,password}=req.body;
        const existingAdmin= await Admin.findOne({username});
        if(existingAdmin){
            return res.status(400).json({message:"Admin already exists"})
        }
        const newAdmin= await Admin.create({username,password});
        res.status(200).json(newAdmin); 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const loginAdmin=async (req,res)=>{
    try {
        const {username,password}=req.body;
        const admin = await Admin.findOne({username})
        if(!admin){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const isMatch=await bcrypt.compare(password,admin.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token=jwt.sign({id:admin._id},JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({message:error.message})   
    }
}
const verifyToekn=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded=jwt.verify(token,JWT_SECRET);
        req.admin=decoded;
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized"})
    }
}
module.exports={
    registerAdmin,
    loginAdmin,
    verifyToekn
}