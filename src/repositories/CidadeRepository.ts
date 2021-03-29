import { connection } from '../database';

import Cidade from '../models/Cidade';

class CidadeRepository {
    public async findByCodigo(codigo: number): Promise<Cidade | undefined> {
        return await connection<Cidade>('cidade').where({ codigo }).first();
    }

    public async findAll(): Promise<Cidade[] | undefined> {
        return await connection<Cidade>('cidade').select('*');
    }
}

export default CidadeRepository;
