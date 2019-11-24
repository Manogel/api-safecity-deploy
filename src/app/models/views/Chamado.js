import Sequelize, { Model } from 'sequelize';

class Chamado extends Model {
  static init(sequelize) {
    super.init(
      {
        id_chamado: {type: Sequelize.INTEGER,
        primaryKey: true,
      autoIncrement: true,
    },
        titulo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        categoria: Sequelize.STRING,
        situacao: Sequelize.STRING,
        prioridade: Sequelize.STRING,
        data_criacao: Sequelize.DATE,
        data_finalizacao: Sequelize.DATE,
        prioridade: Sequelize.STRING,
        cep: Sequelize.CHAR,
        nome_rua: Sequelize.STRING,
        nome_bairro: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
        

      },
      {
        sequelize,
        tableName: 'view_chamado',
        timestamps: false,
        freezeTableName: true
        
      }

    );

    //this.removeAttribute('id')
  }
}



export default Chamado;
