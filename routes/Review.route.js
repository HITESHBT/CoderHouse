const express=require('express')
const router=express.Router();
const {createReview,getReview,getReviewById,getReviewByName,updateReview,deleteReview}=require('../controllers/Review.controller');
router.post('/create',createReview);
router.get('/',getReview);
router.get('/:id',getReviewById);
router.get('/:name',getReviewByName);
router.put('/:id',updateReview);
router.delete('/:id',deleteReview);
module.exports=router;