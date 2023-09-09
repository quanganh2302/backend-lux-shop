"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Color, {
        through: models.Product_Color,
        sourceKey: "id",
        targetKey: "colorKey",
        foreignKey: "productId",
        otherKey: "keyMap",
      });
      Product.hasMany(models.Product_Color);
      Product.belongsTo(models.Type_Customer, {
        foreignKey: "typeKeyMap",
        targetKey: "key",
      });
      Product.belongsTo(models.Size, { foreignKey: "sizeKeyMap" });
      Product.belongsTo(models.Category, {
        foreignKey: "catagoriesId",
        targetKey: "cateKey",
      });
      Product.belongsTo(models.Tag, {
        foreignKey: "tagName",
      });
    }
  }
  Product.init(
    {
      productId: DataTypes.STRING,
      nameProductEn: DataTypes.STRING,
      nameProductVi: DataTypes.STRING,
      desc: DataTypes.STRING,
      materials: DataTypes.STRING,
      image: DataTypes.STRING,
      tagName: DataTypes.STRING,
      catagoriesId: DataTypes.STRING,
      typeKeyMap: DataTypes.STRING,
      sizeKeyMap: DataTypes.STRING,
      quantity: DataTypes.STRING,
      weigh: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
