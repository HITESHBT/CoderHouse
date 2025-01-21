const express= require('express')
const router=express.Router()
const Employee= require('../models/Employee.model')
const { createEmployee,getEmployee,getEmployeeById,updateEmployee,deleteEmployee } = require('../controllers/Employee.controller')

router.post('/createEmployee',createEmployee)
router.get('/getEmployee',getEmployee)
router.get('/getEmployeeById/:id',getEmployeeById)
router.put('/updateEmployee/:id',updateEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
module.exports=router
