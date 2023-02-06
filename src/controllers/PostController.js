/**
 * 
 */
import PostService from '../services/PostService.js'

// this controller creates a new Post object in the database
const createPost = async (request, response) => {
    try {
        await PostService.createPost(request.body);
        response.redirect('/views/posts');
    } catch (error) {
        response.render('500');
    }
}

export { createPost }