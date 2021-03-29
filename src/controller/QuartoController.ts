import { json, Request, Response } from 'express';
import QuartoRepository from '../repositories/QuartoRepository';

class QuartoController {
    async findByCodigo(request: Request, response: Response): Promise<Response> {
        const { codigo } = request.body;
        const quartoRepository = new QuartoRepository();

        const quarto = await quartoRepository.findByCodigo(codigo);

        return response.json({quarto});
    }

    async findByHotel(request: Request, response: Response): Promise<Response> {
        const { hotel } = request.body;
        const quartoRepository = new QuartoRepository();

        const quartos = await quartoRepository.findByCidade(hotel);

        return response.json({quartos});
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const quartoRepository = new QuartoRepository();

        const quartos = await quartoRepository.findAll();

        return response.json({quartos});
    }
}

export default QuartoController;
