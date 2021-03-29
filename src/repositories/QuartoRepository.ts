import { connection } from '../database';
import Quarto from '../models/Quarto';

class QuartoRepository {
    public async findByCodigo(codigo: number): Promise<Quarto | undefined> {
        return await connection<Quarto>('quarto').where({ codigo }).first();
    }

    public async findByCidade(codigo_hotel: number): Promise<Quarto[] | undefined> {
        return await connection<Quarto>('quarto').where({ codigo_hotel });
    }

    public async findAll(): Promise<Quarto[] | undefined> {
        return await connection<Quarto>('quarto').select('*');
    }
}

export default QuartoRepository;
