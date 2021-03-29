import { connection } from '../database';

import Hotel from '../models/Hotel';

class HotelRepository {
    public async findByCodigo(codigo: number): Promise<Hotel | undefined> {
        return await connection<Hotel>('hotel').where({ codigo }).first();
    }

    public async findByCidade(codigo_cidade: number): Promise<Hotel[] | undefined> {
        return await connection<Hotel>('hotel').where({ codigo_cidade });
    }

    public async findAll(): Promise<Hotel[] | undefined> {
        return await connection<Hotel>('hotel').select('*');
    }
}

export default HotelRepository;
