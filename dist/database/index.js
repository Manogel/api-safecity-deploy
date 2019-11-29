"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

// import User from '../app/models/User';
// import File from '../app/models/File';

var _Funcionario = require('../app/models/Funcionario'); var _Funcionario2 = _interopRequireDefault(_Funcionario);

var _Categoria = require('../app/models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);
var _Setor = require('../app/models/Setor'); var _Setor2 = _interopRequireDefault(_Setor);

var _Situacao = require('../app/models/Situacao'); var _Situacao2 = _interopRequireDefault(_Situacao);
var _Prioridade = require('../app/models/Prioridade'); var _Prioridade2 = _interopRequireDefault(_Prioridade);
// import Anexo from '../app/models/Anexo';
var _Cargo = require('../app/models/Cargo'); var _Cargo2 = _interopRequireDefault(_Cargo);
var _Chamado = require('../app/models/Chamado'); var _Chamado2 = _interopRequireDefault(_Chamado);
var _ChamadoFuncionario = require('../app/models/ChamadoFuncionario'); var _ChamadoFuncionario2 = _interopRequireDefault(_ChamadoFuncionario);
var _ChamadoNota = require('../app/models/ChamadoNota'); var _ChamadoNota2 = _interopRequireDefault(_ChamadoNota);
var _Chamado3 = require('../app/models/views/Chamado'); var _Chamado4 = _interopRequireDefault(_Chamado3);

// tem que adicionar todos os models aqui
// User, File,
const models = [
  _ChamadoNota2.default,
  _ChamadoFuncionario2.default,
  _Cargo2.default,
  _Chamado2.default,
  _Prioridade2.default,
  _Situacao2.default,
  _Setor2.default,
  _Categoria2.default,
  _Funcionario2.default,
  _Chamado4.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);

    models
      .map(model => model.init(this.connection))
      .map(model => {
        try {
          model.associate(this.connection.models);
        } catch (e) {
          // console.log('n tem');
        }
      });
  }
}

exports. default = new Database();
