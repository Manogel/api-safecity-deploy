import Sequelize, { Model } from 'sequelize';

class Situacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id_situacao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_situacao',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }
}

export default Situacao;
