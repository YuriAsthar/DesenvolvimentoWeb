import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor()
    {
        this.app = express();

        mongoose.connect("mongodb+srv://web202001:admin@cluster0-uiemd.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        this.middlewares();
        this.routes();
    }

    middlewares()
    {
        this.app.use(express.json());
    }

    routes()
    {
        this.app.use(routes);
    }
}

export default new App().app;