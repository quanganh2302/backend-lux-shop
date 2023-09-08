"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type_Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type_Customer.hasMany(models.Product, { foreignKey: "typeKeyMap" });
    }
  }
  Type_Customer.init(
    {
      key: DataTypes.STRING,
      nameEn: DataTypes.STRING,
      nameVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type_Customer",
    }
  );
  return Type_Customer;
};
