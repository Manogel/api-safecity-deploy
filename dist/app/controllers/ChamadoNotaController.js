"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _ChamadoNota = require('../models/ChamadoNota'); var _ChamadoNota2 = _interopRequireDefault(_ChamadoNota);

class ChamadoNotaController {
  async show(req, res) {
    const notas = await _ChamadoNota2.default.findAll();
    res.json(notas);
  }

  async store(req, res) {
    const notas = await _ChamadoNota2.default.findAll();
    res.json(notas);
  }
}

exports. default = new ChamadoNotaController();
