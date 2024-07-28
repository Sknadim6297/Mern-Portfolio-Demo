
exports.contact= async (req,res)=>{
 try {
    const {name,email,message}=req.body;
    const userMsg= `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    const sentMessage=await sendMsg(userMsg)
    if(!sentMessage){
      return res.status(400).json({success:false,message:"Message Not send"});
    }else{
      return res.status(200).json({success:true,message:"Message Send Successfully"});
    }
 } catch (error) {
    return res.status(500).json({error:error.message})
 }
}