import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoutes from './sessions.routes';
import paisRoutes from './pais.routes';
import cidadeRoutes from './cidade.routes';
import hotelRoutes from './hotel.routes';
import hotelImagensRoutes from './quarto.routes';
import quartoRoutes from './quarto.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/pais', paisRoutes);
routes.use('/cidade', cidadeRoutes);
routes.use('/hotel', hotelRoutes);
routes.use('/hotel_imagens', hotelImagensRoutes);
routes.use('/quarto', quartoRoutes);

export default routes;
