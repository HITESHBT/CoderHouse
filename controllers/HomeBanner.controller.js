const HomeBanner=require('../models/HomeBanner.model')

const createHomeBanner=async(req,res)=>{
    try {
        console.log(req.body)
        const homeBanner=await HomeBanner.create(req.body);
        res.status(201).json({HomeBanner: homeBanner})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getHomeBanner=async(req,res)=>{
    try {
        const homeBanner=await HomeBanner.find();
        res.status(200).json({HomeBanner: homeBanner})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const updateHomeBanner=async(req,res)=>{
    try {
        const {id}=req.params;
        const homeBanner=await HomeBanner.findByIdAndUpdate(id,req.body,{new:true});
        if(!homeBanner){
            return res.status(404).json({message:"HomeBanner not found"})
        }
        const newHomeBanner=await HomeBanner.findById(id);
        res.status(200).json({HomeBanner: newHomeBanner})
    } catch (error) {
        res.status(404).json({message:error.message})
    }   
} 
const deleteHomeBanner=async(req,res)=>{
    try {
        const {id}=req.params;
        const homeBanner=await HomeBanner.findByIdAndDelete(id);
        if(!homeBanner){
            return res.status(404).json({message:"HomeBanner not found"})
        }
        res.status(200).json({message:"HomeBanner deleted successfully"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
module.exports={createHomeBanner,getHomeBanner,updateHomeBanner,deleteHomeBanner}