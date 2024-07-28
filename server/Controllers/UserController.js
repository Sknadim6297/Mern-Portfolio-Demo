const User=require('../models/Usermodel');

exports.getUser=async (req,res)=>{
    try{
        const user =await User.findOne().select('-password -email');
        if(!user){
            return res.status(404).json({success:false,message:'User not found'});
        }
        res.status(200).json({success:true,user});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}