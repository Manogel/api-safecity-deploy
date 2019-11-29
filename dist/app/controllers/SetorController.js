"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Setor = require('../models/Setor'); var _Setor2 = _interopRequireDefault(_Setor);

class SetorController {
  async index(req, res) {
    const Setores = await _Setor2.default.findAll();
    res.json(Setores);
  }
}

exports. default = new SetorController();
