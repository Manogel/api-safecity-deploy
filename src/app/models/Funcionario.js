import Sequelize, { Model } from 'sequelize';

class Funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        id_funcionario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sobrenome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        matricula: {
          type: Sequelize.CHAR,
          allowNull: false,
        },
        senha: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        autorizacao: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        cpf: {
          type: Sequelize.CHAR,
          allowNull: false,
        },
        fk_cargo: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
      },
      {
        sequelize,
        tableName: 'tbl_funcionarios',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cargo, { foreignKey: 'fk_cargo' });
  }
}

export default Funcionario;
