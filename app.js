const mysql = require("mysql2");
require('dotenv').config();

// connection vars are in docker-compose file
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost", //use 'mysql' (the service name) if this node.js app is dockerized itself (in development). Probably won't need to because Render handles containerization for us during deployment
  user: process.env.DB_USER || "user", // non-root user (MYSQL_USER)
  password: process.env.DB_PASSWORD || "userpassword",
  database: process.env.DB_DATABASE || "mydatabase", 
  port: 3307
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Hello World, I successfully connected to the database!");
});
