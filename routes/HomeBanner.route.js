const express = require('express');
const router=express.Router();
const {createHomeBanner,getHomeBanner,updateHomeBanner,deleteHomeBanner}=require('../controllers/HomeBanner.controller')
router.post('/',createHomeBanner)
router.get('/',getHomeBanner)
router.put('/:id',updateHomeBanner)
router.delete('/:id',deleteHomeBanner)
module.exports=router