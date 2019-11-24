import Categoria from '../models/Categoria';

class CategoriaController {
  async index(req, res) {
    const categorias = await Categoria.findAll() 
    res.json(categorias);
  }
}

export default new CategoriaController();