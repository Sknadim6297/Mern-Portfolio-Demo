const User=require('../models/Usermodel')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')

//signUp Routes
exports.signup = async(req,res)=>{
    const {name,email,password} =req.body;
    try {
        let user=await User.findOne({email});
    if(user){
        return res.status(400).json({ msg:"User already Exits"})
    }else{
        //Hassing the Password
        const SecurePassword = await bcrypt.hash(password,10);

        let user = await User.create({
            name,
            email,
            password:SecurePassword,
        })
        await user.save();
        return res.status(201).json({ success:true,message:"User Created SuccesFully"});
    }
    } catch (error) {
        return res.status(500).json({success:false,message : error.message})
        
    }
}
exports.login = async(req,res)=>{
    const {email,password} =req.body;
    try {
       let user = await User.findOne({email});

       if(!user){
           return res.status(400).json({success:false,message:"User Not Found"})
       }
       const comparePassword = await bcrypt.compare(password,user.password);
         if(!comparePassword){
              return res.status(400).json({success:false,message:"Invalid Credentials"})
         }else{

            const existingToken=req.cookies.token;

            if(existingToken){
                res.clearCookie("token");
            }
            const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'30s'})
            res.cookie('token',token,{
                path:'/',
                httpOnly:true,
                expiresIn:new Date(Date.now()+1000*30),
                sameSite:"lax",
            });
            return res.status(200).json({success:true,msg:"Succesfully Logged In"})
         }

    } catch (error) {
        return res.status(500).json({success:false,message : error.message})
}
}
exports.logout = async(req,res)=>{
    try {
        res.clearCookie("token");
        res.status(200).json({success:true,message:"Logged Out Succesfully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
        
    }
}
