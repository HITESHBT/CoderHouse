const Gallery=require('../models/Gallery.model')
const express=require('express')
const router=express.Router()
const {createGallery,getGallery,getGalleryById,updateGallery,deleteGallery}=require('../controllers/Gallery.controller')
router.post('/create',createGallery)
router.get('/',getGallery)
router.get('/:id',getGalleryById)
router.put('/:id',updateGallery)
router.delete('/:id',deleteGallery)
module.exports=router
