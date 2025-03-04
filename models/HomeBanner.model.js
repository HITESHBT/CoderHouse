const mongoose=require('mongoose')
const homeBannerSchema=mongoose.Schema({
    image:{
        type:String,
        required:true,
    }
    ,description:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:false,
    }
}, { strict: true })
const HomeBanner=mongoose.model('HomeBanner',homeBannerSchema)
module.exports=HomeBanner