const express = require('express');
const { Register , loginUser} = require('../controller/authController');
const authenticateJWT = require('../config/auth');
const { getAllUsers } = require('../controller/users.controller');
const router = express.Router();
/* 
@auth controller
@public 
@method POST 
*/ 
router.post('/register', Register);
router.post('/login', loginUser);
/*

*/
router.get('/usersProfiles',authenticateJWT, getAllUsers)

module.exports = router;

 