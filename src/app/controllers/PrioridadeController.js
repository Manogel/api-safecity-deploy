import Prioridade from '../models/Prioridade';

class PrioridadeController {
  async index(req, res) {
    const prioridades = await Prioridade.findAll();
    res.json(prioridades);
  }
}

export default new PrioridadeController();
