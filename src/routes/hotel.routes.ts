import { Router } from 'express';
import HotelCidadeController from '../controller/HotelController';

const hotelRoutes = Router();
const hotelController = new HotelCidadeController();

hotelRoutes.get('/', hotelController.findAll);
hotelRoutes.get('/getByCodigo', hotelController.findByCodigo);
hotelRoutes.get('/getByCidade', hotelController.findByCidade);

export default hotelRoutes;
