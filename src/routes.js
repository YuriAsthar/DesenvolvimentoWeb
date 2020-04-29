import { Router } from 'express';
import SessionController from './controllers/SessionController';
import HotelController from './controllers/HotelController';
import ReservaController from './controllers/ReservaController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({responde: true});
});

//Hoteis
routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.put('/hoteis', HotelController.update);
routes.delete('/hoteis', HotelController.destroy);

//Reservas
routes.get('/reservas', ReservaController.index);
routes.post('/reservas', ReservaController.store);
routes.put('/reservas', ReservaController.update);
routes.delete('/reservas', ReservaController.destroy);

//Sessão
routes.get('/session', SessionController.index);
routes.post('/session', SessionController.store);
routes.put('/session', SessionController.update);
routes.delete('/session', SessionController.destroy);

export default routes;