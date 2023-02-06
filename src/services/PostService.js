/**
 * 
 */
import mongoose from 'mongoose';
import Post from '../models/Post.js';

// this service...
const getAllPosts = async () => {
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
    }
}

// this service...
const getPostByMongoId = async (_id) => {
    try {
        if (!mongoose.isValidObjectId(_id)) {
            return { message: 'post not found :(' }
        }
        const posts = await Post.findOne({ _id });

        if (!posts) {
            return { message: 'post not found :(' }
        }

        return posts;
    } catch (error) {
        console.log(error);
    }
}

// this service...
const createPost = async (post) => {
    try {
        const newPost = await Post.create(post);
        return newPost;
    } catch (error) {
        console.log(error);
    }
}

export default { getAllPosts, getPostByMongoId, createPost }