const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.post('/addUser',userController.createUser),
router.get('/getUser',userController.getuser);
router.get('/getUserById/:id',userController.getUserById);
router.post('/updateUser',userController.updateUser),
router.get('/deleteUser/:id',userController.deleteUser)
router.get('/userLogin',userController.login);


module.exports = router;