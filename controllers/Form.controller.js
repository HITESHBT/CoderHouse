const Form=require('../models/Form.model');
const createForm =async (req,res)=>{
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).send(form);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
const getForms =async (req,res)=>{
    try {
        const forms = await Form.find();
        res.status(200).send(forms);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
const getForm =async (req,res)=>{
    try {
        const {id} = req.params
        const form = await Form.findById(id);
        if(!form){
            return res.status(404).json({message:"Form not found"});
        }
        res.status(200).send(form);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
const updateForm =async (req,res)=>{
    try {
        const {id} = req.params
        const form = await Form.findByIdAndUpdate(id,req.body,{new:true});
        if(!form){
            return res.status(404).json({message:"Form not found"});
        }
        const updatedForm = await Form.findById(id);
        res.status(200).send(updatedForm);
    }
    catch (error) {
        res.status(500).json({error:error.message});
    }
}
const deleteForm =async (req,res)=>{
    try {
        const {id} = req.params
        const form = await Form.findByIdAndDelete(id);
        if(!form){
            return res.status(404).json({message:"Form not found"});
        }
        res.status(200).json({message:"Form deleted successfully"});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports={
    createForm,
    getForms,
    getForm,
    updateForm,
    deleteForm
}