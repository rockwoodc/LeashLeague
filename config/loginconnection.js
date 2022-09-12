const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;