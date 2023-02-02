const { query } = require("../database/database.js");

exports.getAllContactUsQuery = async () => {
  const data = await query(`SELECT * FROM allContactus`);

  return {
    data,
  };
};

exports.addContactUsQuery = async (data) => {
  const result = await query(
    `INSERT INTO allContactus(name, email, phone, message) VALUES('${data.name}', '${data.email}', '${data.phone}', '${data.message}')`
  );

  let message = "Something went wrong!";

  if (result) {
    message = "Contacted successfully";
    data = result;
  }

  return { message, data };
};
