const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Root route for authentication
router.get('/', (req, res) => {
    res.render('pages/landing');
});

// Signup routes 
router.get('/signup', authController.getSignupPage);
router.post('/signup', authController.postSignup);

// Email verification route
router.get('/verify-email', authController.verifyEmail);

// login routes 
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

//forgot password route
router.get('/forgot-password', authController.getForgotPassword);
router.post('/forgot-password', authController.postForgotPassword);
// Remove or comment out the following line as getResetPassword does not exist
// router.get('/reset-password', authController.getResetPassword);
router.post('/reset-password', authController.resetPassword);

//logout route
router.get('/logout', authController.logout);
router.post('/user/dashboard', authController.resetPassword);

module.exports = router;

