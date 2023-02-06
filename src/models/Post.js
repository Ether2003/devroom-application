/**
 * 
 */
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'a title is required!'] // duh!
    },

    body: {
        type: String,
        required: [true, 'content is required!'] // duh!
    }
});

export default mongoose.model('Post', PostSchema);