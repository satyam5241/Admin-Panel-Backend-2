import dotenv from "dotenv";
dotenv.config();

const { HOST, USER, PASSWORD, DATABASE } = process.env;

export const config = {
  db: {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  },
};
