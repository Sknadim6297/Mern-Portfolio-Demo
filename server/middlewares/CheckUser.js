const jwt=require('jsonwebtoken');

exports.checkUser=async (req,res,next)=>{
    const {token}=req.cookies;
    try {
        if(!token)
            return res.status(401).json({success:false,message:"No token found"});

        const user=jwt.verify(token,process.env.JWT_SECRET);
        res.clearCookies('token');

        const newToken=jwt.sign({id:user.id},process.env.JWT_SECRET,{
        expiresIn:"30s",
        });
        res.cookie('token',newToken,{
            path:'/',
            httpOnly:true,
            expiresIn:new Date(Date.now()+1000*30),
            sameSite:'lax',
        });

        return res.status(200).json({success:true,message:"User is Logged in",user})
    } catch (error) {
        return res.status(401).json({success:false,message:"Invalid Token"});
    }
}