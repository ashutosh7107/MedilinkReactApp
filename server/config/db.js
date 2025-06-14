require("dotenv").config();

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");

  const createUserTable = `
    CREATE TABLE IF NOT EXISTS user (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      resetToken VARCHAR(255),
      resetTokenExpiration DATETIME
    );
  `;

  connection.query(createUserTable, (err, result) => {
    if (err) throw err;
    console.log("User table ready.");
  });
});

module.exports = connection;
