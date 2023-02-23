const { Sequelize } = require("sequelize");
const sequelize = require("../config/dbseq.js");
const { DataTypes } = Sequelize;

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    lastname: { type: DataTypes.STRING(100), allowNull: true },
    lastname: { type: DataTypes.STRING(100), allowNull: true },
    birthdate: {
      type: DataTypes.DATEONLY(),
    },
    department: { type: DataTypes.STRING(100), allowNull: true },
    street: { type: DataTypes.STRING(100), allowNull: true },
    city: { type: DataTypes.STRING(100), allowNull: true },
    state: { type: DataTypes.STRING(100), allowNull: true },
    zip: { type: DataTypes.INTEGER(20), allowNull: true },
    createdAt: DataTypes.DATEONLY(),
    updatedAt: DataTypes.DATEONLY(),
  },
  {
    freezeTableName: true,
    timestamps: true,
    truncate: true,
    restartIdentity: true,
  }
);
User.sync({ alter: true });
module.exports = User;
