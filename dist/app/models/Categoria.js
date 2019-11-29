"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Categoria extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_categoria: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: _sequelize2.default.STRING,
        descricao: _sequelize2.default.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_categorias',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }
}

exports. default = Categoria;
