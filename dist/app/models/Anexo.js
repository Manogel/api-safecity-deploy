"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Anexo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_anexo: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        anexo: _sequelize2.default.STRING,
        data_upload: _sequelize2.default.DATE,
      },
      {
        sequelize,
        tableName: 'tbl_anexos',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }
}

exports. default = Anexo;
