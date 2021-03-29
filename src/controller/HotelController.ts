import { json, Request, Response } from 'express';
import HotelRepository from '../repositories/HotelRepository';

class HotelController {
    async findByCodigo(request: Request, response: Response): Promise<Response> {
        const { codigo } = request.body;
        const hotelRepository = new HotelRepository();

        const hotel = await hotelRepository.findByCodigo(codigo);

        return response.json({hotel});
    }

    async findByCidade(request: Request, response: Response): Promise<Response> {
        const { cidade } = request.body;
        const hotelRepository = new HotelRepository();

        const hoteis = await hotelRepository.findByCidade(cidade);

        return response.json({hoteis});
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const hotelRepository = new HotelRepository();

        const hoteis = await hotelRepository.findAll();

        return response.json({hoteis});
    }
}

export default HotelController;
