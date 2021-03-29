import { Router } from 'express';
import PaisController from '../controller/PaisController';

const paisRoutes = Router();
const paisController = new PaisController();

paisRoutes.get('/', paisController.findAll);

export default paisRoutes;
