"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class allCode_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      allCode_User.hasMany(models.User, { foreignKey: "roleId" });
      allCode_User.hasMany(models.User, { foreignKey: "genderId" });
    }
  }
  allCode_User.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "allCode_User",
    }
  );
  return allCode_User;
};
