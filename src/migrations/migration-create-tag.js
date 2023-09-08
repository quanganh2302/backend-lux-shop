"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tagKey: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nameEn: {
        type: Sequelize.STRING,
      },
      nameVi: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tags");
  },
};
