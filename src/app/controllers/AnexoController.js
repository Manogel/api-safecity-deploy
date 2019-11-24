import Anexo from '../models/Anexo';

class AnexoController {
  async index(req, res) {
    const anexos = await Anexo.findAll();
    res.json(anexos);
  }
}

export default new AnexoController();
