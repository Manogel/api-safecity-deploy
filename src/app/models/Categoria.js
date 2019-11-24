import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
  static init(sequelize) {
    super.init(
      {
        id_categoria: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
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

export default Categoria;
