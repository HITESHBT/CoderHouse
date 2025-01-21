const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const adminSchema= new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
adminSchema.pre('save',function(next){
    if(this.isModified('password')){
        this.password=bcrypt.hashSync(this.password,10)
    }
    next();
})
module.exports=mongoose.model('Admin',adminSchema)