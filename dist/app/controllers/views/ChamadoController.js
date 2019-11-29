"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Chamado = require('../../models/views/Chamado'); var _Chamado2 = _interopRequireDefault(_Chamado);

class ChamadoController {
  async index(req, res) {
    const chamados = await _Chamado2.default.findAll()
    res.json(chamados);
  }
}

exports. default = new ChamadoController();