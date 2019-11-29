"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Funcionario = require('../models/Funcionario'); var _Funcionario2 = _interopRequireDefault(_Funcionario);

class FuncionarioController {
  async index(req, res) {
    const funcionarios = await _Funcionario2.default.findAll({
      include: [{ all: true, nested: true }],
    });
    res.json(funcionarios);
  }
}

exports. default = new FuncionarioController();
