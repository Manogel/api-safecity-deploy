import Sequelize, { Model } from 'sequelize';

class Setor extends Model {
  static init(sequelize) {
    super.init(
      {
        id_setor: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_setores',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }
}

export default Setor;
