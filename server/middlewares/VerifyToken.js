const jwt = require('jsonwebtoken');
const User=require('../models/Usermodel');


exports.verifyToken = async (req, res, next) => {
    //getting token from cookies
    const { token } = req.cookies;


    try {
        if (!token)
            return res.status(401).json({ success: false, message: 'No token found' });
             //verification of the token
             const user=jwt.verify(token,process.env.JWT_SECRET);
             req.id=user.id;
             next();
    } catch (err) {
        res.status(400).json({ success: false, message: 'Invalid Token' });
    }
}


exports.authUser=async (req,res,next)=>{
    const userid=req.id;
    try {
        const user=await User.findById(userid,"-password");
        return res.status(200).json({success:true,user});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}