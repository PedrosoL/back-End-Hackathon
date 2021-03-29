import { Router } from 'express';
import HotelImagensCidadeController from '../controller/HotelImagensController';

const hotelImagensRoutes = Router();
const hotelImagensController = new HotelImagensCidadeController();

hotelImagensRoutes.get('/', hotelImagensController.findAll);
hotelImagensRoutes.get('/getByCodigo', hotelImagensController.findByCodigo);
hotelImagensRoutes.get('/getByHotel', hotelImagensController.findByHotel);

export default hotelImagensRoutes;
