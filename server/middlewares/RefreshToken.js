const jwt=require('jsonwebtoken');

exports.refreshToken=async (req,res,next)=>{
    try {
        const cookies=req.headers.cookie;
        const prevToken=cookies.split('=')[1];

        if(!prevToken) return res.status(401).json({success:false,message:'No token found'});

        jwt.verify(prevToken,process.env.JWT_SECRET,(err,user)=>{
            if(err) return res.status(400).json({success:false,message:'Invalid Token'});
            res.clearCookie('token');
            const newToken=jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
            res.cookie('token',newToken,{
                path:'/',
                httpOnly:true,
                expiresIn:new Date(new Date().getTime()+1000*30),
                sameSite:'lax'
            });
            req.id=user.id;
            next();
        });
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}