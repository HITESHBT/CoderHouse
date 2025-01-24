const express= require('express')
const router=express.Router()
const Employee= require('../models/Employee.model')
const { createEmployee,getEmployee,getEmployeeById,getEmployeeByName,getEmployeeByDomain,updateEmployee,deleteEmployee } = require('../controllers/Employee.controller')

router.post('/createEmployee',createEmployee)
router.get('/getEmployee',getEmployee)
router.get('/getEmployeeById/:id',getEmployeeById)
router.get('/getEmployeeByName/:name',getEmployeeByName)
router.get('/getEmployeeByDomain/:domain',getEmployeeByDomain)
router.put('/updateEmployee/:id',updateEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
module.exports=router
