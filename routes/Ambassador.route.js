const express=require('express')
const router=express.Router();
const {createAmbassador,getAmbassador,getAmbassadorById,getAmbassadorByCollege,getAmbassadorByName,updateAmbassador,deleteAmbassador}=require('../controllers/Ambassador.controller');
router.post('/create',createAmbassador);
router.get('/',getAmbassador);
router.get('/:id',getAmbassadorById);
router.get('/college/:college',getAmbassadorByCollege);
router.get('/:name',getAmbassadorByName);
router.put('/:id',updateAmbassador);
router.delete('/:id',deleteAmbassador);
module.exports=router;
