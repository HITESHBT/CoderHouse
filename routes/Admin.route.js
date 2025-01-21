const express=require('express')
const router=express.Router()
const Admin=require('../models/Admin.model')
const { registerAdmin,loginAdmin } = require('../controllers/Admin.controller')
const {check,validationResult}=require('express-validator')

router.post('/register',
    [
        check('username','username is required').not().isEmpty(),
        check('password','password is required').not().isEmpty()
    ],
    (req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        registerAdmin(req,res);
    }
)
router.post('/login',[
    check('username','username is required').not().isEmpty(),
    check('password','password is required').not().isEmpty()
],
(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    loginAdmin(req,res);
}
)
module.exports=router;