"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ChamadoFuncionario extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado_funcionario: {
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
        data_atribuicao: _sequelize2.default.DATE,
      },
      {
        sequelize,
        tableName: 'tbl_chamado_funcionario',
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

exports. default = ChamadoFuncionario;
