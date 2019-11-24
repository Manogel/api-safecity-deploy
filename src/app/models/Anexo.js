import Sequelize, { Model } from 'sequelize';

class Anexo extends Model {
  static init(sequelize) {
    super.init(
      {
        id_anexo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        anexo: Sequelize.STRING,
        data_upload: Sequelize.DATE,
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

export default Anexo;
