const mongoose=require('mongoose')
const momentSchema= new mongoose.Schema({
    momentType:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const Moment= mongoose.model('Moment', momentSchema)
module.exports=Moment

