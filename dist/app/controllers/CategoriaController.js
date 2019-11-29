"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Categoria = require('../models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);

class CategoriaController {
  async index(req, res) {
    const categorias = await _Categoria2.default.findAll() 
    res.json(categorias);
  }
}

exports. default = new CategoriaController();