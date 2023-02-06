/**
 * 
 */
import express from 'express';
const router = express.Router();

// import controller functions
import { registerUser, authenticateUser } from '../controllers/AuthController.js';

// this route 
router.post('/auth/register',
    registerUser);

// this route 
router.post('/auth/login',
    authenticateUser);

export default router;