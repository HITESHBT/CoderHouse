const mongoose=require('mongoose')
const achieverSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    company_logo:{
        type:String,
        required:true
    },
})
const Achiever=mongoose.model('Achiever',achieverSchema);
module.exports=Achiever;