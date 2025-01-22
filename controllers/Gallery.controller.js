const Gallery=require('../models/Gallery.model')
const createGallery=async(req,res)=>{
    try {
        const gallery=await Gallery.create(req.body);
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getGallery=async(req,res)=>{
    try {
        const gallery=await Gallery.find();
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getGalleryById=async(req,res)=>{
    try {
        const {id}=req.params;
        const gallery=await Gallery.findById(id)
        if(!gallery){
            return res.status(404).json({message:"Gallery not found"})
        }
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getGalleryByType=async(req,res)=>{
    try {
        const {type}=req.params;
        const query = { type: { $regex: `^${type}$`, $options: 'i' } };

        const gallery=await Gallery.find({query})
        if(!gallery){
            return res.status(404).json({message:"Gallery not found"})
        }
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateGallery=async(req,res)=>{
    try {
        const {id}=req.params;
        const gallery=await Gallery.findByIdAndUpdate(id,req.body)
        if(!gallery){
            return res.status(404).json({message:"Gallery not found"})
        }
        const updatedGallery=await Gallery.findById(id)
        res.status(200).json(updatedGallery);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteGallery=async(req,res)=>{
    try {
        const {id}=req.params;
        const gallery=await Gallery.findByIdAndDelete(id)
        if(!gallery){
            return res.status(404).json({message:"Gallery not found"})
        }
        res.status(200).json({message:"Gallery deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports=
{
    createGallery,
    getGallery,
    getGalleryById,
    getGalleryByType,
    updateGallery,
    deleteGallery
}