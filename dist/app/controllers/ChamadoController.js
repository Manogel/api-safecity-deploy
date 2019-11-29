"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _Chamado = require('../models/Chamado'); var _Chamado2 = _interopRequireDefault(_Chamado);
var _Categoria = require('../models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);
var _Situacao = require('../models/Situacao'); var _Situacao2 = _interopRequireDefault(_Situacao);
var _Prioridade = require('../models/Prioridade'); var _Prioridade2 = _interopRequireDefault(_Prioridade);

class ChamadoController {
  async show(req, res) {
    /* {
      include: [{ all: true, nested: true }],
    } */
    const chamados = await _Chamado2.default.findAll();
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

    const chamado = await _Chamado2.default.create({
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
    const chamado = await _Chamado2.default.findByPk(id, {
      include: [_Situacao2.default, _Prioridade2.default, { model: _Categoria2.default, as: 'Categoria' }],
    });
    const response = await _axios2.default.post(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${chamado.latitude},${chamado.longitude}&key=${API_KEY}`
    );
    const [result, ...rest] = response.data.results;
    console.log(chamado);
    res.json({ ...chamado.dataValues, endereco: result.formatted_address });
  }
}

exports. default = new ChamadoController();
