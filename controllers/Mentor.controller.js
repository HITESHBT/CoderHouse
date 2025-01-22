const Mentor=require('../models/Mentor.model');
const createMentor= async (req,res)=>{
    try {
        const mentor=await Mentor.create(req.body);
        res.status(200).json(mentor);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getMentor=async(req,res)=>{
    try {
        const mentor=await Mentor.find();
        res.status(200).json(mentor);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getMentorById=async(req,res)=>{
    try {
        const {id}=req.params;
        const mentor=await Mentor.findById(id)
        if(!mentor){
            return res.status(404).json({message:"Mentor not found"})
        }
        res.status(200).json(mentor);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getMentorByName=async(req,res)=>{
    try{
        const {name}=req.params;
        const query = { name: { $regex: `^${name}$`, $options: 'i' } };
        const mentor=await Mentor.find({query})
        if(!mentor){
            return res.status(404).json({message:"Mentor not found"})
        }
        res.status(200).json(mentor);
    } catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateMentor=async(req,res)=>{
    try {
        const {id}=req.params;
        const mentor=await Mentor.findByIdAndUpdate (id,req.body)
        if(!mentor){
            return res.status(404).json({message:"Mentor not found"})
        }
        const updatedMentor=await Mentor.findById(id)
        res.status(200).json(updatedMentor);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteMentor=async(req,res)=>{
    try {
        const {id}=req.params;
        const mentor=await Mentor.findByIdAndDelete(id)
        if(!mentor){
            return res.status(404).json({message:"Mentor not found"})
        }
        res.status(200).json({message:"Mentor deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createMentor,
    getMentor,
    getMentorById,
    getMentorByName,
    updateMentor,
    deleteMentor
}