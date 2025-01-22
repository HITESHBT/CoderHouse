const HourlyProgram = require('../models/HourlyProgram.model.js');
const createHourlyProgram= async (req,res)=>{
    try {
        const hourlyProgram=await HourlyProgram.create(req.body);
        res.status(200).json(hourlyProgram);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getHourlyProgram=async(req,res)=>{
    try {
        const hourlyProgram=await HourlyProgram.find();
        res.status(200).json(hourlyProgram);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getHourlyProgramById= async (req,res)=>{
    try{
        const {id}=req.params;
        const hourlyProgram= await HourlyProgram.findById(id)
        if(!hourlyProgram){
            return res.status(404).json({message:"HourlyProgram not found"})
        }
        res.status(200).json(hourlyProgram);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getHourlyProgramByName=async (req,res)=>{
    const {name}=req.params;
    const query = { name: { $regex: `^${name}$`, $options: 'i' } };
    try{
        const hourlyProgram=await HourlyProgram.find({query})
        if(!hourlyProgram){
            return res.status(404).json({message:"HourlyProgram not found"})
        }
        res.status(200).json(hourlyProgram);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateHourlyProgram=async(req,res)=>{
    try {
        const {id}=req.params;
        const hourlyProgram=await HourlyProgram.findByIdAndUpdate(id,req.body)
        if(!hourlyProgram){
            return res.status(404).json({message:"HourlyProgram not found"})
        }
        const updatedHourlyProgram=await HourlyProgram.findById(id)
        res.status(200).json(updatedHourlyProgram);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteHourlyProgram=async(req,res)=>{
    try {
        const {id}=req.params;
        const hourlyProgram=await HourlyProgram.findByIdAndDelete(id)
        if(!hourlyProgram){
            return res.status(404).json({message:"HourlyProgram not found"})
        }
        res.status(200).json({message:"HourlyProgram deleted successfully"})
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createHourlyProgram,
    getHourlyProgram,
    getHourlyProgramById,
    getHourlyProgramByName,
    updateHourlyProgram,
    deleteHourlyProgram
}
