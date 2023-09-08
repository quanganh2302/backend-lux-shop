"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCode_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  AllCode_Product.init(
    {
      type: DataTypes.STRING,
      keyMap: DataTypes.STRING,
      value: DataTypes.STRING,
      nameEn: DataTypes.STRING,
      nameVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllCode_Product",
    }
  );
  return AllCode_Product;
};
