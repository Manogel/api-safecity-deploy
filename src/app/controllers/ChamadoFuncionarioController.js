import ChamadoFuncionario from '../models/ChamadoFuncionario';

class ChamadoFuncionarioController {
  async index(req, res) {
    const chamados = await ChamadoFuncionario.findAll({
      include: [{ all: true, nested: true }],
    });
    res.json(chamados);
  }
}

export default new ChamadoFuncionarioController();
