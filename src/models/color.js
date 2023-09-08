"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Color.belongsToMany(models.Product, {
        through: models.Product_Color,
        sourceKey: "colorKey",
        targetKey: "id",
        foreignKey: "keyMap",
        otherKey: "productId",

      });
      Color.hasMany(models.Product_Color);
    }
  }
  Color.init(
    {
      colorKey: DataTypes.STRING,
      value: DataTypes.STRING,
      nameEn: DataTypes.STRING,
      nameVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Color",
    }
  );
  return Color;
};
