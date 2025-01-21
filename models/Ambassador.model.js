const mongoose=require('mongoose')
const ambassadorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    college_name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const Ambassador=mongoose.model('Ambassador',ambassadorSchema)
module.exports=Ambassador