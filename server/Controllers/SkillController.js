const Skill=require('../models/Skillmodel');

exports.getSkills=async (req,res)=>{
    try {
        const skills=await Skill.find();
        if(!skills){
            return res.status(404).json({success:false,message:"User not Found"});
        }else{
            return res.status(200).json({success:true,skills})
        }
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }

}
exports.addSkills=async (req,res)=>{
  const {skill,level}=req.body;
  try {
    const newSkill =await Skill.create({
        skill,
        level
    })
    await newSkill.save();
    return res.status(201).json({success:true,msg:"New Skills Added"})
    
  } catch (error) {
   return res.status(500).json({success:false,message:error.message}) 
  }

}
exports.removeSkills=async (req,res)=>{
    const {id}=req.params;
    try {
        const skill=await Skill.findByIdAndDelete(id);
        if(!skill){
            res.status(404).json({success:false,message:"Skill Not Found"})
        }else{
            res.status(200).json({success:true,message:"Skill Deleted"})
        }
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
        
    }
}