import database from '../../../database';

class ClienteController {
  async index(req, res) {
    const [clientes,] = await database.connection.query('SELECT * FROM view_clientes', {raw: false})
    res.json(clientes);
  }
}

export default new ClienteController();