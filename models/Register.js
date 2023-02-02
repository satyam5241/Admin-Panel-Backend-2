const { query } = require("../database/database.js");

exports.getAllRegisterQuery = async () => {
  const data = await query(`SELECT * FROM register`);

  return {
    data,
  };
};

exports.addRegisterQuery = async (data) => {
  const result = await query(
    `INSERT INTO register(name, email, phone, company, jobTitle, message, youAre) VALUES('${data.name}', '${data.email}', '${data.phone}', '${data.company}', '${data.jobTitle}', '${data.message}', '${data.youAre}')`
  );

  let message = "Something went wrong!";

  if (result) {
    message = "Registered successfully";
    data = result;
  }

  return { message, data };
};
