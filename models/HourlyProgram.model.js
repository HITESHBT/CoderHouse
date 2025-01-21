const mongoose=require('mongoose')
const hourlyProgramSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})
const HourlyProgram=mongoose.model('HourlyProgram',hourlyProgramSchema);
module.exports=HourlyProgram;