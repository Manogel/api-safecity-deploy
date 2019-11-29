"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ChamadoNota extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado_nota: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fk_id_chamado: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
        },

        fk_id_funcionario: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
        },
        descricao: _sequelize2.default.STRING,
        anexo: _sequelize2.default.STRING,
        data_criacao: _sequelize2.default.DATE,
      },

      {
        sequelize,
        tableName: 'tbl_chamado_notas',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Chamado, { foreignKey: 'fk_id_chamado' });
    this.belongsTo(models.Funcionario, { foreignKey: 'fk_id_funcionario' });
  }
}

exports. default = ChamadoNota;
