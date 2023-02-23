const { Sequelize } = require("sequelize");
const sequelize = require("../config/dbseq.js");
const { DataTypes } = Sequelize;

const Settings = sequelize.define(
  "settings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    limit: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: 10,
    },
    sortby: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "firstname",
    },
    pagination: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0,
    },
    pages: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    truncate: true,
    restartIdentity: true,
  }
);
Settings.sync({ alter: true });
module.exports = Settings;
