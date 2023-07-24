'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title must be required'
        },
        notNull: {
          msg: 'Title must be required'
        }
      }
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};