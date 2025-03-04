const Program=require('../models/CampusProgramDescription.model')
const createProgram= async (req,res)=>{
    try{
        const program=await Program.create(req.body)
        res.status(201).json({message:"created successfully",program:program})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getProgram=async (req,res)=>{
    try{
        const programs= await Program.find()
        if(!programs)
            return res.status(404).json({message:"program not found"});
        res.status(200).json(programs)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getProgramById = async (req,res)=>{
    try{
        const {id}=req.params;
        const program= await Program.findById(id)
        if(!program)
            return res.status(404).json({message:"program not found"});
        res.status(200).json(program)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateProgram=async (req,res)=>{
    try{
    const {id}=req.params;
    const program=await Program.findByIdAndUpdate(id,req.body)
    if(!program)
        return res.staus(404).json({message:"program not found"})
    const newProgram=await Program.findById(id)
    res.status(200).json(newProgram)
}
catch(error){
    res.status(500).json({message:error.message})
}
}
const deleteProgram= async (req,res)=>{
    try{
        const {id}=req.params
        const program= await Program.findByIdAndDelete(id)
        if(!program)
            return res.status(404).json({message:"program not found"})
        res.status(200).json({message:"program deleted successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createProgram,
    getProgram,
    getProgramById,
    updateProgram, 
    deleteProgram
}