"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.STRING,
      },
      nameProductEn: {
        type: Sequelize.STRING,
      },
      nameProductVi: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      materials: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      tagName: {
        type: Sequelize.STRING,
      },
      catagoriesId: {
        type: Sequelize.STRING,
      },
      sizeKeyMap: {
        type: Sequelize.STRING,
      },
      typeKeyMap: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.STRING,
      },
      weigh: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
