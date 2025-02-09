const express=require('express')
const router = express.Router()
const {createAppointment, deleteAppointment, getAppointment, getAppointmentById,updateAppointment}= require('../controllers/Appointment.controller');
const { verifyToekn } = require('../controllers/Admin.controller');
router.post("/",createAppointment);
router.get("/",verifyToekn,getAppointment)
router.get("/:id",verifyToekn,getAppointmentById)
router.put("/:id",verifyToekn,updateAppointment)
router.delete("/:id",verifyToekn,deleteAppointment)
module.exports=router;