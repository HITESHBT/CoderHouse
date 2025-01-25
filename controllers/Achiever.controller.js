const Achiever = require("../models/Achiever.model")
const createAchiever=async(req,res)=>{
    try {
        const achiever=await Achiever.create(req.body);
        res.status(200).json(achiever);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAchiever=async(req,res)=>{
    try {
        const achiever=await Achiever.find();
        res.status(200).json(achiever);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAchieverById=async(req,res)=>{
    try {
        const {id}=req.params;
        const achiever=await Achiever.findById(id)
        if(!achiever){
            return res.status(404).json({message:"Achiever not found"})
        }
        res.status(200).json(achiever);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAchieverByCompany=async(req,res)=>{
    try {
        const {name}=req.params;
        const query = { company_name: name};

        const achiever=await Achiever.find({query})
        if(!achiever){
            return res.status(404).json({message:"Achiever not found"})
        }
        res.status(200).json(achiever);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAchieverByName=async(req,res)=>{
    try {
        const {name}=req.params;
        const query = { name: { $regex: `^${name}$`, $options: 'i' } };

        const achiever=await Achiever.find({query})
        if(!achiever){
            return res.status(404).json({message:"Achiever not found"})
        }
        res.status(200).json(achiever);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateAchiever=async(req,res)=>{
    try {
        const {id}=req.params;
        const achiever=await Achiever.findByIdAndUpdate(id,req.body,{new:true}) 
        if(!achiever){
            return res.status(404).json({message:"Achiever not found"})
        }
        const updatedAchiever=await Achiever.findById(id);
        res.status(200).json(updatedAchiever);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteAchiever=async(req,res)=>{
    try {
        const {id}=req.params;
        const achiever=await Achiever.findByIdAndDelete(id)
        if(!achiever){
            return res.status(404).json({message:"Achiever not found"})
        }
        res.status(200).json({message:"Achiever deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createAchiever,
    getAchiever,
    getAchieverById,
    getAchieverByCompany,
    getAchieverByName,
    updateAchiever,
    deleteAchiever
}