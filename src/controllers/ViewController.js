/**
 * 
 */
import PostService from '../services/PostService.js';

// this controller renders a login page
const renderLoginPage = async (request, response) => {
    try {
        response.render('login');
    } catch (error) {
        console.log(error);
    }
}

// this controller renders a register page
const renderRegisterPage = (request, response) => {
    try {
        response.render('register');
    } catch (error) {
        console.log(error);
    }
}

// this controller renders a page that contains all posts in the database
const renderPostsPage = async (request, response) => {
    try {
        response.render('posts', { posts: await PostService.getAllPosts() });
    } catch (error) {
        console.log(error);
    }
}

// this controller renders a page that contains a single post
const renderPostPage = async (request, response) => {
    try {
        response.render('post', { 
            post: await PostService.getPostByMongoId(request.params.id),
            posts: await PostService.getAllPosts()
        });
    } catch (error) {
        console.log(error);
    }
}

export { renderLoginPage, renderRegisterPage, renderPostsPage, renderPostPage };