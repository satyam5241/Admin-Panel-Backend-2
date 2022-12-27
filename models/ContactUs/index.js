import { query } from "../../database";

export const getAllContactUsQuery = async () => {
  const data = await query(`SELECT * FROM contactus`);

  return {
    data,
  };
};

export const addContactUsQuery = async (data) => {
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
