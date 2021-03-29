import { connection } from '../database';
import HotelImagens from '../models/Hotel_Imagens';

class HotelRepository {
    public async findByCodigo(codigo: number): Promise<HotelImagens | undefined> {
        return await connection<HotelImagens>('hotel_imagens').where({ codigo }).first();
    }

    public async findByCidade(codigo_hotel: number): Promise<HotelImagens[] | undefined> {
        return await connection<HotelImagens>('hotel_imagens').where({ codigo_hotel });
    }

    public async findAll(): Promise<HotelImagens[] | undefined> {
        return await connection<HotelImagens>('hotel_imagens').select('*');
    }
}

export default HotelRepository;
