/**
 * 
 */
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// this controller creates a new user in the database
const registerUser = async (request, response) => {
    try {
        // validate that the form is not empty
        if (request.body.email == '' || request.body.password == '' || request.body.confrimPassword == '') {
            return response.render('error', { message: 'please fill out the form!' });
        }

        // validate that the email is unique
        if (await User.findOne({ email: request.body.email })) {
            return response.render('error', { message: 'this email is already being used!' });
        }

        // validate that the passwords match
        if (request.body.password !== request.body.confirmPassword) {
            return response.render('error', { message: 'passwords must match!' });
        }

        // hash the password (lol)

        //
        const user = await User.create(request.body);
        return response.render('success', {
            message: `successfully registed ${user.email} to the database!`,
            link: 'login',
            redirect: '/views/login'
        });
    } catch (error) {
        console.log(error);
        return response.render('500');
    }
}

// this controller authenticates an existing user
const authenticateUser = async (request, response) => {
    try {
        // validate that the form is not empty
        if (request.body.email == '' || request.body.password == '') {
            return response.render('error', { message: 'please fill out the form!' });
        }

        // validate that the user with the specified email even exists
        const user = await User.findOne({ email: request.body.email });
        if (!user) {
            return response.render('error', { message: 'incorrect username or password!' });
        }

        // validate that the password match
        if (user.password !== request.body.password) {
            return response.render('error', { message: 'incorrect username or password!' });
        }

        // save jwt in the cookie!
        const token = jwt.sign({ _id: user._id }, 'keyboard cat');
        response.cookie('token', token);

        return response.redirect('/views/posts');
    } catch (error) {
        response.render('500');
    }
}

export { registerUser, authenticateUser }