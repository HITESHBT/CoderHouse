const mongoose= require('mongoose')
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    domain:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:false
    }
})
const Employee=mongoose.model("Employee",employeeSchema);
module.exports=Employee