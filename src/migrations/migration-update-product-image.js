module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Products", "image", {
        type: Sequelize.BLOB("long"),
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
  },
};
