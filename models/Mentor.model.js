const mongoose = require('mongoose');
const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const Mentor=mongoose.model('Mentor',mentorSchema);
module.exports=Mentor;