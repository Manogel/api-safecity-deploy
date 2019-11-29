"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Chamado extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado: {type: _sequelize2.default.INTEGER,
        primaryKey: true,
      autoIncrement: true,
    },
        titulo: _sequelize2.default.STRING,
        descricao: _sequelize2.default.STRING,
        categoria: _sequelize2.default.STRING,
        situacao: _sequelize2.default.STRING,
        prioridade: _sequelize2.default.STRING,
        data_criacao: _sequelize2.default.DATE,
        data_finalizacao: _sequelize2.default.DATE,
        prioridade: _sequelize2.default.STRING,
        cep: _sequelize2.default.CHAR,
        nome_rua: _sequelize2.default.STRING,
        nome_bairro: _sequelize2.default.STRING,
        latitude: _sequelize2.default.STRING,
        longitude: _sequelize2.default.STRING,
        

      },
      {
        sequelize,
        tableName: 'view_chamado',
        timestamps: false,
        freezeTableName: true
        
      }

    );

    //this.removeAttribute('id')
  }
}



exports. default = Chamado;
