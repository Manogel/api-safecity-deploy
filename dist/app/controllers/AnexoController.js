"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Anexo = require('../models/Anexo'); var _Anexo2 = _interopRequireDefault(_Anexo);

class AnexoController {
  async index(req, res) {
    const anexos = await _Anexo2.default.findAll();
    res.json(anexos);
  }
}

exports. default = new AnexoController();
