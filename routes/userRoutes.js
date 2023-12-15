//// loading express
const express = require("express");
const router = express.Router();

//// importing route controller file
const userController = require('../controllers/userController')
const upload = require('../middlewares/upload');

router.get("/",userController.login);
router.get("/signUp",userController.signUP );
router.post('/signUp',upload.single('avatar'),userController.signUP_post);
router.post("/login",userController.login_post);
router.get("/home/:id", userController.homepage);
router.get('/userProfile/:id',userController.userProfile);
router.get('/logout',userController.logOut);
router.get('/editProfile/:id',userController.editProfile);
router.put('/editProfile/:id',upload.single('avatar'),userController.editProfile_put);

module.exports=router;