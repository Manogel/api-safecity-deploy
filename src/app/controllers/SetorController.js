import Setor from '../models/Setor';

class SetorController {
  async index(req, res) {
    const Setores = await Setor.findAll();
    res.json(Setores);
  }
}

export default new SetorController();
