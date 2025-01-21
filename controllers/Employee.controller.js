const Employee= require('../models/Employee.model')
const createEmployee=async (req,res)=>{
    try {
        const employee=await Employee.create(req.body);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getEmployee=async (req,res)=>{
    try {
        const employee=await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getEmployeeById=async (req,res)=>{
    try {
        const {id}=req.params;
        const employee=await Employee.findById(id)
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateEmployee=async (req,res)=>{
    try {
        const {id}=req.params;
        const employee=await Employee.findByIdAndUpdate(id,req.body,{new:true}) 
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        const updatedEmployee=await Employee.findById(id);
        res.status(200).json(updatedEmployee);
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteEmployee=async (req,res)=>{
    try {
        const {id}=req.params;
        const employee=await Employee.findByIdAndDelete(id)
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json({message:"Employee deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={
    createEmployee,
    getEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}