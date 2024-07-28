const { createTransport} =require('nodemailer')

const sendMessage=async (userMsg)=>{
    const transporter=createTransport({
        service:'gmail',
        auth:{
            user:process.env.GMAIL_USER,
            pass:process.env.APP_PASSWORD,
        },
    })
    const sendMessage=await transporter.sendMail({
        from:process.env.GMAIL_USER,
        to:process.env.GMAIL_USER,
        subject:"New Message From Portfolio Site",
        text:userMsg,


    })
    return sendMessage;
};
module.exports={
    sendMessage
}