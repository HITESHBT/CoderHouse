const mongoose=require('mongoose')
const homeBannerSchema=mongoose.Schema({
    image:{
        type:String,
        required:true,
    }
    ,description:{
        type:String,
        required:true
    }
})
const HomeBanner=mongoose.model('HomeBanner',homeBannerSchema)
module.exports=HomeBanner