const mongoose=require('mongoose');
const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:false
    },
    linkedin_url:{
        type:String,
        required:false
    }
},{timestamps:true
})
const Form=mongoose.model('Form',formSchema);
module.exports=Form;