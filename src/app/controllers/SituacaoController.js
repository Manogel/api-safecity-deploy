import Situacao from '../models/Situacao';

class SituacaoController {
  async index(req, res) {
    const situacoes = await Situacao.findAll();
    res.json(situacoes);
  }
}

export default new SituacaoController();
