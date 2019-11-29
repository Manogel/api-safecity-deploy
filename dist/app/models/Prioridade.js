"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Prioridade extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_prioridade: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: _sequelize2.default.STRING,
        descricao: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_prioridades',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }
}

exports. default = Prioridade;
