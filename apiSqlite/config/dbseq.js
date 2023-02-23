const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");

/*
const createDb = mysql
  .createConnection({
    user: "root",
    password: "",
  })
  .then((connection) => {
    connection
      .query("CREATE DATABASE IF NOT EXISTS wealth_health;")
      .then(() => console.log("DataBase created Successfully"));
  })
  .catch((error) => {
    console.log(error);
  });

const sequelize = new Sequelize("wealth_health", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
*/
const sequelize = new Sequelize("wealth_health", "root", "", {
  host: "./dev.sqlite",
  dialect: "sqlite",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Sequelize Connected Successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    //  sequelize.close();
  });

//sequelize.sync();

module.exports = sequelize;
global.sequelize;
