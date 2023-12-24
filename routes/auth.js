const express = require('express');
const router = express.Router();
const passport = require('passport');
const user=require('../models/user')
const authController= require('../controller/userController')


// Register a new user
router.post('/register', authController.register);

// User login
router.post('/login', passport.authenticate('local'),authController.login);

// Logout
router.get('/logout', authController.logout );

module.exports = router;

