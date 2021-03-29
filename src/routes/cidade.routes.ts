import { Router } from 'express';
import CidadeController from '../controller/CidadeController';

const cidadeRoutes = Router();
const cidadeController = new CidadeController();

cidadeRoutes.get('/', cidadeController.findAll);
cidadeRoutes.get('/getByCodigo', cidadeController.findByCodigo);

export default cidadeRoutes;
