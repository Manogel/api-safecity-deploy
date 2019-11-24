import ChamadoNota from '../models/ChamadoNota';

class ChamadoNotaController {
  async show(req, res) {
    const notas = await ChamadoNota.findAll();
    res.json(notas);
  }

  async store(req, res) {
    const notas = await ChamadoNota.findAll();
    res.json(notas);
  }
}

export default new ChamadoNotaController();
