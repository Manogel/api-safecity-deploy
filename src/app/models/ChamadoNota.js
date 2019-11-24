import Sequelize, { Model } from 'sequelize';

class ChamadoNota extends Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado_nota: {
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
        descricao: Sequelize.STRING,
        anexo: Sequelize.STRING,
        data_criacao: Sequelize.DATE,
      },

      {
        sequelize,
        tableName: 'tbl_chamado_notas',
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

export default ChamadoNota;
