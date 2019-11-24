import Sequelize, { Model } from 'sequelize';

class Cargo extends Model {
  static init(sequelize) {
    super.init(
      {
        id_cargo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fk_setor: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
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

export default Cargo;
