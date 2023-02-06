// import libraries, middleware, and routers
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import ViewRouter from './routers/ViewRouter.js';
import PostRouter from './routers/PostRouter.js'
import AuthRouter from './routers/AuthRouter.js';
import path from 'path';
import * as url from 'url';

dotenv.config({ path: './.env' });
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

// initialize middleware & routers
app.set('view engine', 'ejs');
console.log(path.join(__dirname, '/views'))
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(ViewRouter);
app.use(PostRouter);
app.use(AuthRouter);

// hello, world 👋
app.get('/', (request, response) => {
    response.redirect('/views/login');
});

// database connection & open port 🐸
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://admin:admin@cluster0.andmxqc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((connection) => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('database connection successfull');
            console.log(`listening @ http://localhost:${process.env.PORT || 3333}`);
        });
    })
    .catch((error) => {
        console.log(error);
        console.log('database connection failed');
        console.log('program terminated');
    });

export default app;