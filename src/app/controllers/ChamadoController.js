import axios from 'axios';
import Chamado from '../models/Chamado';
import Categoria from '../models/Categoria';
import Situacao from '../models/Situacao';
import Prioridade from '../models/Prioridade';
import ChamadoNota from '../models/ChamadoNota';
import Funcionario from '../models/Funcionario';

class ChamadoController {
  async show(req, res) {
    /* {
      include: [{ all: true, nested: true }],
    } */
    const chamados = await Chamado.findAll();
    res.json(chamados);
  }

  async store(req, res) {
    const { filename: anexo } = req.file;
    const {
      solicitante,
      titulo,
      descricao,
      categoria,
      latitude,
      longitude,
    } = req.body;

    /*  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const { logradouro: rua, bairro } = data; */

    const chamado = await Chamado.create({
      solicitante,
      titulo,
      descricao,
      latitude,
      longitude,
      anexo,
      fk_id_categoria: categoria,
    });

    res.json(chamado);
  }

  async index(req, res) {
    const { id } = req.params;
    const API_KEY = 'AIzaSyDkUI2f5wkf8MuAV_BgLjfsqbYfIlulJfQ';
    const chamado = await Chamado.findByPk(id, {
      include: [
        Situacao,
        Prioridade,
        { model: Categoria, as: 'Categoria' },
        { model: ChamadoNota, as: 'Notas', include: [Funcionario] },
      ],
    });
    const response = await axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${chamado.latitude},${chamado.longitude}&key=${API_KEY}`
    );
    const [result, ...rest] = response.data.results;
    res.json({ ...chamado.dataValues, endereco: result.formatted_address });
  }
}

export default new ChamadoController();
