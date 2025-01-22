const Ambassador = require('../models/Ambassador.model')

const createAmbassador = async (req, res) => {
    try {
        const ambassador = await Ambassador.create(req.body);
        res.status(200).json(ambassador);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getAmbassador = async (req, res) => {
    try {
        const ambassador = await Ambassador.find();
        res.status(200).json(ambassador);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getAmbassadorById = async (req, res) => {
    try {
        const { id } = req.params;
        const ambassador = await Ambassador.findById(id)
        if (!ambassador) {
            return res.status(404).json({ message: "Ambassador not found" })
        }
        res.status(200).json(ambassador);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getAmbassadorByCollege=async(req,res)=>{
    try {
        const {college}=req.params;
        const query = { college_name: { $regex: `^${college}$`, $options: 'i' } };

        const ambassador=await Ambassador.find({query}).sort({name:1})
        if(!ambassador){
            return res.status(404).json({message:"Ambassador not found"})
        }
        res.status(200).json(ambassador);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAmbassadorByName=async(req,res)=>{
    try {
        const {name}=req.params;
        const query = { name: { $regex: `^${name}$`, $options: 'i' } };

        const ambassador=await Ambassador.find({query})
        if(!ambassador){
            return res.status(404).json({message:"Ambassador not found"})
        }
        res.status(200).json(ambassador);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateAmbassador=async(req,res)=>{
    try {
        const {id}=req.params;
        const ambassador=await Ambassador.findByIdAndUpdate(id,req.body,{new:true}) 
        if(!ambassador){
            return res.status(404).json({message:"Ambassador not found"})
        }
        res.status(200).json(ambassador);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteAmbassador=async(req,res)=>{
    try {
        const {id}=req.params;
        const ambassador=await Ambassador.findByIdAndDelete(id)
        if(!ambassador){
            return res.status(404).json({message:"Ambassador not found"})
        }
        res.status(200).json({message:"Ambassador deleted"});
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {
    createAmbassador,
    getAmbassador,
    getAmbassadorById,
    getAmbassadorByCollege,
    getAmbassadorByName,
    updateAmbassador,
    deleteAmbassador
}
