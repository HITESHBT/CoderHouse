const Appointment= require('../models/Appointment.model')
const getAppointment= async (req,res)=>{
    try {
        const appointments= await Appointment.find()
        if(!appointments)
        return res.status(404).json({message:"not appointments found"})
        res.status(200).json(appointments)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getAppointmentById= async (req,res)=>{
    try {
        const {id} = req.params
        const appointment=await Appointment.findById(id)
        if(!appointment)
        return res.status(404).json({message:"appointment not found"})
        res.status(200).json(appointment)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const createAppointment= async (req,res)=>{
    try {
        const appointment=await Appointment.create(req.body)
        res.status(201).json({message:"created succesffuly",appointment:appointment})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateAppointment = async(req,res)=>{
    try {
        const {id}=req.params
        const appointment= await Appointment.findByIdAndUpdate(id,req.body)
        if(!appointment)
        {
            return res.status(404).json({message:"appointment not found"})
        }
        const newappointment= await Appointment.findById(id);
        res.status(200).json(newappointment)
    } catch (error) {
        console.error()
    }
}
const deleteAppointment= async(req,res)=>{
    try {
        const {id}= req.params
        const appointment = await Appointment.findByIdAndDelete(id)
        if(!appointment)
        {
            return res.status(404).json({message:"appointment not found"})
        }
        res.status(200).json({message:"appointment deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports= {deleteAppointment,createAppointment,updateAppointment,getAppointment,getAppointmentById}