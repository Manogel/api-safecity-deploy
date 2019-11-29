"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Situacao = require('../models/Situacao'); var _Situacao2 = _interopRequireDefault(_Situacao);

class SituacaoController {
  async index(req, res) {
    const situacoes = await _Situacao2.default.findAll();
    res.json(situacoes);
  }
}

exports. default = new SituacaoController();
