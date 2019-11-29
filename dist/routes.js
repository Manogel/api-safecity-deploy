"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
// import SessionController from './app/controllers/SessionController';
// import FileController from './app/controllers/FileController';
var _FuncionarioController = require('./app/controllers/FuncionarioController'); var _FuncionarioController2 = _interopRequireDefault(_FuncionarioController);

var _CategoriaController = require('./app/controllers/CategoriaController'); var _CategoriaController2 = _interopRequireDefault(_CategoriaController);
var _SetorController = require('./app/controllers/SetorController'); var _SetorController2 = _interopRequireDefault(_SetorController);
var _SituacaoController = require('./app/controllers/SituacaoController'); var _SituacaoController2 = _interopRequireDefault(_SituacaoController);
var _PrioridadeController = require('./app/controllers/PrioridadeController'); var _PrioridadeController2 = _interopRequireDefault(_PrioridadeController);
// import AnexoController from './app/controllers/AnexoController';
var _ChamadoController = require('./app/controllers/ChamadoController'); var _ChamadoController2 = _interopRequireDefault(_ChamadoController);
var _ChamadoFuncionarioController = require('./app/controllers/ChamadoFuncionarioController'); var _ChamadoFuncionarioController2 = _interopRequireDefault(_ChamadoFuncionarioController);
var _ChamadoNotaController = require('./app/controllers/ChamadoNotaController'); var _ChamadoNotaController2 = _interopRequireDefault(_ChamadoNotaController);

// import ClienteViewController from './app/controllers/views/ClienteController';
var _ChamadoController3 = require('./app/controllers/views/ChamadoController'); var _ChamadoController4 = _interopRequireDefault(_ChamadoController3);

var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);
var _upload = require('./config/upload'); var _upload2 = _interopRequireDefault(_upload);

const routes = new (0, _express.Router)();
const upload = _multer2.default.call(void 0, _upload2.default);

/* routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/files', upload.single('file'), FileController.store); */

routes.get('/', (res, req) => {
  return req.json({ ok: 'Hello World!!' });
});

routes.get('/funcionarios', _FuncionarioController2.default.index);

routes.get('/categorias', _CategoriaController2.default.index);
routes.get('/setores', _SetorController2.default.index);

routes.get('/situacoes', _SituacaoController2.default.index);
routes.get('/prioridades', _PrioridadeController2.default.index);
routes.get('/chamado_notas', _ChamadoNotaController2.default.show);
routes.post(
  '/chamado_notas',
  upload.single('file'),
  _ChamadoNotaController2.default.store
);

routes.get('/chamados', _ChamadoController2.default.show);
routes.get('/chamados/:id', _ChamadoController2.default.index);
routes.post('/chamados', upload.single('file'), _ChamadoController2.default.store);

routes.get('/view/chamados', _ChamadoController4.default.index);

routes.use(_auth2.default);
// Rotas privadas apartir daqui
routes.put('/users', _UserController2.default.update);

exports. default = routes;
