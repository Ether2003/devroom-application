/**
 * 
 */
import express from 'express';
const router = express.Router();

// import controller functions
import { registerUser, authenticateUser, logoutUser } from '../controllers/AuthController.js';

// this route 
router.post('/auth/register',
    registerUser);

// this route 
router.post('/auth/login',
    authenticateUser);

// this route 
router.post('/auth/logout',
    logoutUser);

export default router;