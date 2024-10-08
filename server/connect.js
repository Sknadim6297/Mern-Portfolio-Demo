const mongoose=require('mongoose')

const connectDb = async ()=>{
    const connection= await mongoose.connect(process.env.MONGO_URI);
    if(connection.STATES.disconnected){
        console.log("Db Connection Failed");
    }else{
        console.log("Db Connection Succesfully");
    }

}

module.exports= { connectDb };