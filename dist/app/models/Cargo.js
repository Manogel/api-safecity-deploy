"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Cargo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_cargo: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fk_setor: {
          type: _sequelize2.default.INTEGER,
          foreignKey: true,
        },
        nome: _sequelize2.default.STRING,
        descricao: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_cargos',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: 'fk_setor' });
  }
}

exports. default = Cargo;
