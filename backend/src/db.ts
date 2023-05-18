import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://admin:root@db_auth:5432/postgres");

const connect = () => {
  try {
    sequelize.authenticate().then(() => {
      console.log("Postgres connection has been established successfully.");});
    } catch (error) {
      console.error("Unable to connect to the database:", error);}
};

export { sequelize, connect };