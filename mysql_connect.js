const mysql = require("mysql");

const db = mysql.createPool({
  connectionlimit: 20,
  host: "sourceinnovate.craxvzlxhclf.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "sourceinnovate",
  port: 3306,
  database: "admindb2",  
  sslmode: true,
  charset: "utf8mb4",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
db.getConnection((error, conn) => {
  if (error) {
    console.log("error => ", error);
  } else {
    console.log("mysql connected cryptoHub");
    conn.rollback();
    conn.release();
  }
});

module.exports = db;
