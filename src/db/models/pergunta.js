'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pergunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pergunta.init({
    texto: DataTypes.STRING,
    dica: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pergunta',
  });
  return Pergunta;
};
