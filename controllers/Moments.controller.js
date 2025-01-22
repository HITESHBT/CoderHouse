const Moment = require('../models/Moments.model')
const createMoment = async (req,res)=>{
    try{
        const moment=await Moment.create(req.body);
        res.status(200).json(moment);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getMoment = async (req,res)=>{
    try{
        const moment=await Moment.find();
        res.status(200).json(moment);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getMomentById = async (req,res)=>{
    try{
        const {id}=req.params;
        const moment=await Moment.findById(id)
        if(!moment){
            return res.status(404).json({message:"Moment not found"})
        }
        res.status(200).json(moment);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getMomentByType = async (req,res)=>{
    try{
        const {type}=req.params;
        const query = { type: { $regex: `^${type}$`, $options: 'i' } };
        const moment=await Moment.find({query})
        if(!moment){
            return res.status(404).json({message:"Moment not found"})
        }
        res.status(200).json(moment);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateMoment =async(req,res)=>{
    try{
        const {id}=req.params;
        const moment=await Moment.findByIdAndUpdate(id,req.body)
        if(!moment){
            return res.status(404).json({message:"Moment not found"})
        }
        const updatedMoment=await Moment.findById(id)
        res.status(200).json(updatedMoment);
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}
const deleteMoment = async (req,res)=>{
    try{
        const {id}=req.params;
        const moment=await Moment.findByIdAndDelete(id)
        if(!moment){
            return res.status(404).json({message:"Moment not found"})
        }
        res.status(200).json({message:"Moment deleted successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createMoment
    ,getMoment
    ,getMomentById
    ,getMomentByType
    ,updateMoment
    ,deleteMoment
}