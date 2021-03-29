import { Router } from 'express';
import QuartoController from '../controller/QuartoController';

const quartoRoutes = Router();
const quartoController = new QuartoController();

quartoRoutes.get('/', quartoController.findAll);
quartoRoutes.get('/getByCodigo', quartoController.findByCodigo);
quartoRoutes.get('/getByHotel', quartoController.findByHotel);

export default quartoRoutes;
