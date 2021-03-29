import { json, Request, Response } from 'express';
import CidadeRepository from '../repositories/CidadeRepository';

class CidadeController {
    async findByCodigo(request: Request, response: Response): Promise<Response> {
        const { codigo } = request.body;
        const cidadeRepository = new CidadeRepository();

        const cidade = await cidadeRepository.findByCodigo(codigo);

        return response.json({cidade});
    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const cidadeRepository = new CidadeRepository();

        const cidades = await cidadeRepository.findAll();

        return response.json({cidades});
    }
}

export default CidadeController;
