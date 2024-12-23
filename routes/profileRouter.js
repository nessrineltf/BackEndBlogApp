const express = require('express');
const {UpdateProfile,
    deletProfile,
    getProfile,
    AploadPicture
    } = require('../controller/profile.controller');
const authenticateJWT = require('../config/auth');
const router = express.Router();

/*
@profile controller
@private 
@method PUT Only user himself
*/
router.put('/myProfile', authenticateJWT,UpdateProfile)
/*
@profile controller
@private 
@method post Only user himself
*/
router.put('/myProfile', authenticateJWT,AploadPicture)
/*
@profile controller
@private 
@method DELETE 
*/
router.delete('/myProfile',authenticateJWT, deletProfile)
/*
@profile controller
@private 
@method GET 
*/
router.get('/myProfile',authenticateJWT, getProfile)
module.exports = router;

 