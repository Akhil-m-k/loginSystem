const express =require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get("/passwordSet",adminController.passwordSet);
router.get("/admlogin",adminController.admLogin);
router.get('/home',adminController.homePage);
router.post("/admlogin",adminController.admLogin_post);
router.get("/adminPanel",adminController.adminPanel)
router.get('/userEdit/:id',adminController.userEdit);
router.put('/userEdit/:id',adminController.userEdit_put);
router.delete('/deleteUser/:id',adminController.deleteUser);
router.post('/search',adminController.searchUsers);

module.exports=router;