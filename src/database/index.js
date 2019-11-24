import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// import User from '../app/models/User';
// import File from '../app/models/File';

import Funcionario from '../app/models/Funcionario';

import Categoria from '../app/models/Categoria';
import Setor from '../app/models/Setor';

import Situacao from '../app/models/Situacao';
import Prioridade from '../app/models/Prioridade';
// import Anexo from '../app/models/Anexo';
import Cargo from '../app/models/Cargo';
import Chamado from '../app/models/Chamado';
import ChamadoFuncionario from '../app/models/ChamadoFuncionario';
import ChamadoNota from '../app/models/ChamadoNota';
import viewChamado from '../app/models/views/Chamado';

// tem que adicionar todos os models aqui
// User, File,
const models = [
  ChamadoNota,
  ChamadoFuncionario,
  Cargo,
  Chamado,
  Prioridade,
  Situacao,
  Setor,
  Categoria,
  Funcionario,
  viewChamado,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

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

export default new Database();
