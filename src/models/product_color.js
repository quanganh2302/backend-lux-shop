"use strict";
import db from "../models";
const Product = db.Product;
const Color = db.Color;
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_Color.belongsTo(models.Product, { foreignKey: "productId" });
      Product_Color.belongsTo(models.Color, { foreignKey: " keyMap" });
    }
  }
  Product_Color.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      keyMap: {
        type: DataTypes.STRING,
        references: {
          model: Color,
          key: "colorKey",
        },
      },
    },
    {
      sequelize,
      modelName: "Product_Color",
    }
  );
  return Product_Color;
};
