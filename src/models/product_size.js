"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  ProductSize.init(
    {
      productId: DataTypes.STRING,
      ColorId: DataTypes.STRING,
      image: DataTypes.STRING,
      sizeKey: DataTypes.STRING,
      quantity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductSize",
    }
  );
  return ProductSize;
};
