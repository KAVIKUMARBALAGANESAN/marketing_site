const { Sequelize } = require("sequelize");
require("dotenv").config();  // ✅ Ensure environment variables are loaded

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env file");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,  // Optional: Disable SQL query logs in console
});

module.exports = sequelize;
