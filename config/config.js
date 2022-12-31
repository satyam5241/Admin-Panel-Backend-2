const dotenv = require("dotenv");
dotenv.config();

const { HOST, USER, PASSWORD, DATABASE } = process.env;

exports.config = {
  db: {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  },
};
