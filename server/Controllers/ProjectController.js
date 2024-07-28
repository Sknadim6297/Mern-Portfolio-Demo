const Project=require('../models/Projectmodel')

exports.getProjects=async(req,res)=>{
    try{
        const projects=await Project.find();
        if(!projects)
            return res.status(400).json({message:"No projects found"});

        res.status(200).json({success:true,projects});
       
    }catch(err){
       return res.status(500).json({message:err.message})
    }
}

exports.addProject=async(req,res)=>{
    try{
        const {name,desc,img,githubUrl,hostedUrl,publicId,deleteToken}=req.body;
        if(!name || !desc){
            return res.status(400).json({message:"Please enter all fields"});
        }
        const newProject=await Project.create({
            name,
            desc,
            img,
            githubUrl,
            hostedUrl,
            publicId,
            deleteToken 
        });
        await newProject.save();
        res.status(201).json({success:true,message:"New Project Added"});
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
exports.removeProject=async(req,res)=>{
    try{
        const {id }=req.params;
        const project=await Project.findByIdAndDelete(id);
        if(!project){
            return res.status(404).json({message:"Project not found"});
        }
        res.status(200).json({success:true,message:"Project Deleted"});
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
exports.updateProject=async(req,res)=>{
    const {id}=req.params;
    const UpdatedData=req.body;

    try {
        let project=await Project.findById(id);
        if(!project){
            return res.status(404).json({message:"Project not found"});
        }
        if(UpdatedData.img){
            project.img=UpdatedData.img;

        }
        for(const key in UpdatedData){
            if(key!=="img")
                project[key]=UpdatedData[key];
        }
        await project.save();
        return res.status(200).json({success:true,message:"Project Updated"});
        
    } catch (error) {
        return res.status(500).json({message:err.message})
        
    }
}