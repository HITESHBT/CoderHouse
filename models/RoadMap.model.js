
const mongoose = require('mongoose');
const roadMapSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})
const RoadMap=mongoose.model('RoadMap',roadMapSchema);
module.exports=RoadMap;