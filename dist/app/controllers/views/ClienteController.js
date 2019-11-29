"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _database = require('../../../database'); var _database2 = _interopRequireDefault(_database);

class ClienteController {
  async index(req, res) {
    const [clientes,] = await _database2.default.connection.query('SELECT * FROM view_clientes', {raw: false})
    res.json(clientes);
  }
}

exports. default = new ClienteController();