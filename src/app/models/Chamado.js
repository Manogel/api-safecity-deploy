import Sequelize, { Model } from 'sequelize';

class Chamado extends Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        solicitante: Sequelize.STRING,
        anexo: Sequelize.STRING,
        fk_id_situacao: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          defaultValue: 1,
        },
        fk_id_prioridade: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          defaultValue: 2,
        },
        fk_id_categoria: {
          type: Sequelize.INTEGER,
          foreignKey: true,
        },
        titulo: Sequelize.STRING,
        data_criacao: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('CURRENT_TIMESTAMP'),
        },
        data_finalizacao: { type: Sequelize.DATE, defaultValue: null },
        descricao: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'tbl_chamados',
        timestamps: false,
        freezeTableName: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Situacao, { foreignKey: 'fk_id_situacao' });
    this.belongsTo(models.Prioridade, { foreignKey: 'fk_id_prioridade' });
    this.belongsTo(models.Categoria, {
      foreignKey: 'fk_id_categoria',
      as: 'Categoria',
    });
    this.hasMany(models.ChamadoNota, {
      foreignKey: 'fk_id_chamado',
      as: 'Notas',
    });
  }
}

export default Chamado;
