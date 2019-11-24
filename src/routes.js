import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import FileController from './app/controllers/FileController';
import FuncionarioController from './app/controllers/FuncionarioController';

import CategoriaController from './app/controllers/CategoriaController';
import SetorController from './app/controllers/SetorController';
import SituacaoController from './app/controllers/SituacaoController';
import PrioridadeController from './app/controllers/PrioridadeController';
// import AnexoController from './app/controllers/AnexoController';
import ChamadoController from './app/controllers/ChamadoController';
import ChamadoFuncionarioController from './app/controllers/ChamadoFuncionarioController';
import ChamadoNotaController from './app/controllers/ChamadoNotaController';

// import ClienteViewController from './app/controllers/views/ClienteController';
import ChamadoViewController from './app/controllers/views/ChamadoController';

import authMiddleware from './app/middlewares/auth';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

/* routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/files', upload.single('file'), FileController.store); */

routes.get('/', (res, req) => {
  return req.json({ ok: 'Hello World!!' });
});

routes.get('/funcionarios', FuncionarioController.index);

routes.get('/categorias', CategoriaController.index);
routes.get('/setores', SetorController.index);

routes.get('/situacoes', SituacaoController.index);
routes.get('/prioridades', PrioridadeController.index);
routes.get('/chamado_notas', ChamadoNotaController.show);
routes.post(
  '/chamado_notas',
  upload.single('file'),
  ChamadoNotaController.store
);

routes.get('/chamados', ChamadoController.show);
routes.get('/chamados/:id', ChamadoController.index);
routes.post('/chamados', upload.single('file'), ChamadoController.store);

routes.get('/view/chamados', ChamadoViewController.index);

routes.use(authMiddleware);
// Rotas privadas apartir daqui
routes.put('/users', UserController.update);

export default routes;
