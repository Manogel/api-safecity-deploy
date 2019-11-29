"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _ChamadoFuncionario = require('../models/ChamadoFuncionario'); var _ChamadoFuncionario2 = _interopRequireDefault(_ChamadoFuncionario);

class ChamadoFuncionarioController {
  async index(req, res) {
    const chamados = await _ChamadoFuncionario2.default.findAll({
      include: [{ all: true, nested: true }],
    });
    res.json(chamados);
  }
}

exports. default = new ChamadoFuncionarioController();
