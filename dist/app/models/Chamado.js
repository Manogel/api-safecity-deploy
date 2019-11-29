"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Chamado extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        solicitante: _sequelize2.default.STRING,
        anexo: _sequelize2.default.STRING,
        fk_id_situacao: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
          defaultValue: 1,
        },
        fk_id_prioridade: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
          defaultValue: 2,
        },
        fk_id_categoria: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
        },
        titulo: _sequelize2.default.STRING,
        data_criacao: {
          type: _sequelize2.default.DATE,
          defaultValue: _sequelize2.default.fn('CURRENT_TIMESTAMP'),
        },
        data_finalizacao: { type: _sequelize2.default.DATE, defaultValue: null },
        descricao: _sequelize2.default.STRING,
        latitude: _sequelize2.default.STRING,
        longitude: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_chamados',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Situacao, { foreignKey: 'fk_id_situacao' });
    this.belongsTo(models.Prioridade, { foreignKey: 'fk_id_prioridade' });
    this.belongsTo(models.Categoria, {
      foreignKey: 'fk_id_categoria',
      as: 'Categoria',
    });
  }
}

exports. default = Chamado;
