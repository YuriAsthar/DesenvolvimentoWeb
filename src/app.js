import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import path from 'path';

class App{
    constructor()
    {
        this.app = express();

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect("mongodb+srv://web202001:admin@cluster0-uiemd.mongodb.net/test?retryWrites=true&w=majority");

        this.middlewares();
        this.routes();
    }

    middlewares()
    {
        this.app.use(
            '/imagens',
            express.static(path.resolve(__dirname, '..', 'uploads')),
            );
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes()
    {
        this.app.use(routes);
    }
}

export default new App().app;