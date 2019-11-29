"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Funcionario extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_funcionario: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        email: {
          type: _sequelize2.default.STRING,
          allowNull: false,
          unique: true,
        },
        telefone: {
          type: _sequelize2.default.STRING,
          allowNull: false,
          unique: true,
        },
        matricula: {
          type: _sequelize2.default.CHAR,
          allowNull: false,
        },
        senha: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        autorizacao: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        cpf: {
          type: _sequelize2.default.CHAR,
          allowNull: false,
        },
        fk_cargo: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
        },
      },
      {
        sequelize,
        tableName: 'tbl_funcionarios',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cargo, { foreignKey: 'fk_cargo' });
  }
}

exports. default = Funcionario;
