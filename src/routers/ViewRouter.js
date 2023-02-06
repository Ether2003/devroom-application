/**
 * 
 */
import express from 'express';
import isAuthenticated from '../middleware/isAuthenticated.js';
import { renderLoginPage, renderRegisterPage, renderPostsPage, renderPostPage } from '../controllers/ViewController.js';

const router = express.Router();

// this route renders a login page
router.get('/views/login',
    renderLoginPage);

// this route renders a register page
router.get('/views/register',
    renderRegisterPage);

// this route renders a page that contains a list of Post's
router.get('/views/posts',
    isAuthenticated,
    renderPostsPage);

// this route renders a page that contains a post specified by a mongodb object id
router.get('/views/posts/:id',
    isAuthenticated,
    renderPostPage);

export default router;