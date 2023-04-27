"use strict";

import { Model } from "sequelize";

interface AutoAttributes {
  precio: number;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Auto extends Model<AutoAttributes> implements AutoAttributes {
    precio!: number;
    marca!: string;
    modelo!: string;
    anio!: number;
    color!: string;
    id!: number;
    static associate(models: any) {
      // define association here
    }
  }
  Auto.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Auto",
    }
  );
  return Auto;
};
