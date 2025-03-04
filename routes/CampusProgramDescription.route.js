const express=require('express');
const router=express.Router()
const { verifyToekn } = require('../controllers/Admin.controller');
const {createProgram,
    getProgram,
    getProgramById,
    updateProgram, 
    deleteProgram}=require('../controllers/CampusProgramDescription.controller')
router.post('/',verifyToekn,createProgram)
router.get('/',getProgram)
router.get('/:id',getProgramById)
router.put('/:id',verifyToekn,updateProgram)
router.delete('/:id',verifyToekn,deleteProgram)
module.exports=router
