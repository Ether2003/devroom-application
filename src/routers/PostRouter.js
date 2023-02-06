/**
 * 
 */
import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { createPost } from '../controllers/PostController.js';

const router = express.Router();

// this route inserts a Post object to the database
router.post('/api/posts',
    isAuthenticated,
    createPost);

export default router;