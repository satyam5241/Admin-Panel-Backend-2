const db = require("../mysql_connect");

exports.query = async (sql, params) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, conn) => {
      if (err) {
        reject(err);
      }
      conn.query(sql, (error, result) => {
        if (error) {
          conn.rollback();
          conn.release();
          reject(error);
        } else {
          conn.commit();
          conn.release();
          resolve(result);
        }
      });
    });
  });
};
