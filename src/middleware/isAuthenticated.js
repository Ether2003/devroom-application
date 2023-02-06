import jwt from 'jsonwebtoken';

const isAuthenticated = (request, response, next) => {
    try {
        const token = request.cookies.token;

        if (!token) {
            response.redirect('/views/login');
        }

        jwt.verify(token, 'keyboard cat');
        
        next();
    } catch (error) {
        response.render('error', {
            message: error.message
        });
    }
}

export default isAuthenticated;