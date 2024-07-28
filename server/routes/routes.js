const express=require("express");
const { signup, login, logout } = require("../Controllers/authController");
const { getUser } = require("../Controllers/UserController");
const { authUser, verifyToken } = require("../middlewares/VerifyToken");
const { refreshToken } = require("../middlewares/RefreshToken");
const { checkUser } = require("../middlewares/CheckUser");
const { getSkills, addSkills, removeSkills } = require("../Controllers/SkillController");
const { getProjects, addProject, removeProject, updateProject } = require("../Controllers/ProjectController");
const { contact } = require("../Controllers/OtherController");

const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)


//User Routes
router.get('/getuser',getUser)
router.get('/authuser',verifyToken,authUser)
router.get('/refresh',refreshToken,verifyToken,authUser)
router.get('/checkuser',checkUser);

//skill Routes
router.get('/getskills',getSkills)
router.post('/addskills',addSkills)
router.delete('/removeskills/:id',removeSkills)

//Project Routes
router.get('/getprojects',getProjects)
router.post('/addproject',addProject)
router.get('/removeproject',removeProject)
router.get('/updateprojects',updateProject)

//other routes
router.get("/contact",contact)




module.exports=router