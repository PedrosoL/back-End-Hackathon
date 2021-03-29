import { json, Request, Response } from 'express';
import HotelImagensRepository from '../repositories/HotelImagensRepository';

class HotelController {
    async findByCodigo(request: Request, response: Response): Promise<Response> {
        const { codigo } = request.body;
        const hotelImagensRepository = new HotelImagensRepository();

        const hotel = await hotelImagensRepository.findByCodigo(codigo);

        return response.json({hotel});
    }

    async findByHotel(request: Request, response: Response): Promise<Response> {
        const { hotel } = request.body;
        const hotelImagensRepository = new HotelImagensRepository();

        const hoteis = await hotelImagensRepository.findByCidade(hotel);

        return response.json({hoteis});
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const hotelImagensRepository = new HotelImagensRepository();

        const hoteis = await hotelImagensRepository.findAll();

        return response.json({hoteis});
    }
}

export default HotelController;
