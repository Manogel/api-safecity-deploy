import Chamado from '../../models/views/Chamado'

class ChamadoController {
  async index(req, res) {
    const chamados = await Chamado.findAll()
    res.json(chamados);
  }
}

export default new ChamadoController();