import Sequelize, { Model } from 'sequelize';

class ChamadoFuncionario extends Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado_funcionario: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        fk_id_chamado: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
        fk_id_funcionario: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
        data_atribuicao: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'tbl_chamado_funcionario',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Chamado, { foreignKey: 'fk_id_chamado' });
    this.belongsTo(models.Funcionario, { foreignKey: 'fk_id_funcionario' });
  }
}

export default ChamadoFuncionario;
