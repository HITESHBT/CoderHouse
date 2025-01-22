const RoadMap = require('../models/RoadMap.model');
const createRoadMap= async(req,res)=>{
    try{
        const roadmap=await RoadMap.create(req.body);
        res.status(200).json(roadmap);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getRoadMap=async(req,res)=>{
    try{
        const roadmap=await RoadMap.find();
        res.status(200).json(roadmap);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getRoadMapById=async(req,res)=>{
    try{
        const {id}=req.params;
        const roadmap=await RoadMap.findById(id)
        if(!roadmap){
            return res.status(404).json({message:"RoadMap not found"})
        }
        res.status(200).json(roadmap);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getRoadMapByName=async(req,res)=>{
    try{
        const {name}=req.params;
        const query = { name: { $regex: `^${name}$`, $options: 'i' } };
        const roadmap=await RoadMap.find({query})
        if(!roadmap){
            return res.status(404).json({message:"RoadMap not found"})
        }
        res.status(200).json(roadmap);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateRoadMap=async(req,res)=>{
    try{
        const {id}=req.params;
        const roadmap=await RoadMap.findByIdAndUpdate(id,req.body)
        if(!roadmap){
            return res.status(404).json({message:"RoadMap not found"})
        }
        const updatedRoadMap=await RoadMap.findById(id)
        res.status(200).json(updatedRoadMap);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteRoadMap=async(req,res)=>{
    try{
        const {id}=req.params;
        const roadmap=await RoadMap.findByIdAndDelete(id)
        if(!roadmap){
            return res.status(404).json({message:"RoadMap not found"})
        }
        res.status(200).json({message:"RoadMap deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={
    createRoadMap,
    getRoadMap,
    getRoadMapById,
    getRoadMapByName,
    updateRoadMap,
    deleteRoadMap
}