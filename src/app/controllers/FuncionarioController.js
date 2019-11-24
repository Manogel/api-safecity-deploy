import Funcionario from '../models/Funcionario';

class FuncionarioController {
  async index(req, res) {
    const funcionarios = await Funcionario.findAll({
      include: [{ all: true, nested: true }],
    });
    res.json(funcionarios);
  }
}

export default new FuncionarioController();
