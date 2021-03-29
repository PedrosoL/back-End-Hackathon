import { connection } from '../database';

import Pais from '../models/Pais';

class PaisRepository {
    public async findByCodigo(codigo: number): Promise<Pais | undefined> {
        return await connection<Pais>('pais').where({ codigo }).first();
    }

    public async findAll(): Promise<Pais[] | undefined> {
        return await connection<Pais>('pais').select('*');
    }
}

export default PaisRepository;
