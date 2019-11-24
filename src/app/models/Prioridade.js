import Sequelize, { Model } from 'sequelize';

class Prioridade extends Model {
  static init(sequelize) {
    super.init(
      {
        id_prioridade: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
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

export default Prioridade;
