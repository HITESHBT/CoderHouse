const express=require('express')
const router=express.Router();
const {createMentor,getMentor,getMentorById,getMentorByName,updateMentor,deleteMentor}=require('../controllers/Mentor.controller');
router.post('/create',createMentor);
router.get('/',getMentor);
router.get('/:id',getMentorById);
router.get('/:name',getMentorByName);
router.put('/:id',updateMentor);
router.delete('/:id',deleteMentor);
module.exports=router;
