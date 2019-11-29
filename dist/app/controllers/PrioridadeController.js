"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Prioridade = require('../models/Prioridade'); var _Prioridade2 = _interopRequireDefault(_Prioridade);

class PrioridadeController {
  async index(req, res) {
    const prioridades = await _Prioridade2.default.findAll();
    res.json(prioridades);
  }
}

exports. default = new PrioridadeController();
