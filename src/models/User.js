/**
 * 
 */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'an email is required!'] 
    },

    password: {
        type: String,
        required: [true, 'a password is required!'] 
    }
});

export default mongoose.model('User', UserSchema);