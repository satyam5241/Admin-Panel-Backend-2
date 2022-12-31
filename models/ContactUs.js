const { query } = require("../database/database.js");

exports.getAllContactUsQuery = async () => {
  const data = await query(`SELECT * FROM contactus`);

  return {
    data,
  };
};

exports.addContactUsQuery = async (data) => {
  const result = await query(
    `INSERT INTO contactus(name, email, phone, message) VALUES('${data.name}', '${data.email}', '${data.phone}', '${data.message}')`
  );

  let message = "Something went wrong!";

  if (result) {
    message = "Contacted successfully";
    data = result;
  }

  return { message, data };
};
