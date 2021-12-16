const Sequelize = require("sequelize");

const setUpDatabase = () => {
  const connection = new Sequelize(
    "have_i_fed_the_cat_app",
    "root",
    "password",
    {
      host: "localhost",
      port: 3307,
      dialect: "mysql",
    }
  );

  connection.sync({ alter: true });
  return {};
};

module.exports = setUpDatabase();
