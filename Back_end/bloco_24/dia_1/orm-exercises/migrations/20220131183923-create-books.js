'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        alloowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        alloowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        alloowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        alloowNull: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        alloowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        alloowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  },
};
