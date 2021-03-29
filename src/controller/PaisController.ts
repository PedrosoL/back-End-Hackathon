import { json, Request, Response } from 'express';
import PaisRepository from '../repositories/PaisRepository';

class PaisController {
  async findAll(request: Request, response: Response): Promise<Response> {
    const paisRepository = new PaisRepository();

    const paises = await paisRepository.findAll();

    return response.json({paises});
  }
}

export default PaisController;
