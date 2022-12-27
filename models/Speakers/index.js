import { query } from "../../database";

export const getAllSpeakersQuery = async () => {
  const data = await query(`SELECT * FROM speakers`);

  return {
    data,
  };
};

export const getSpeakerByIdQuery = async (id) => {
  const data = await query(`SELECT * FROM speakers WHERE id=${id}`);

  return {
    data,
  };
};

export const addSpeakerQuery = async (data, path) => {
  const result = await query(
    `INSERT INTO speakers(image, name) VALUES('${path}', '${data.name}')`
  );

  let message = "Something went wrong when adding speaker";
  let code = 400;

  if (result) {
    message = "Speaker added successfully";
    code = 200;
  }
  return { message, code };
};

export const updateSpeakerQuery = async (data, path) => {
  const result = await query(
    `UPDATE speakers SET image="${path}", name="${data.name}" WHERE id=${data.id}`
  );

  let message = "Something went wrong when updating speaker";
  let code = 400;

  if (result) {
    message = "Speaker updated successfully";
    code = 200;
  }
  return { message, code };
};

export const deleteSpeakerQuery = async (id) => {
  const result = await query(`DELETE FROM speakers WHERE id=${id}`);
  let message = "Something went wrong when deleting speaker";

  if (result) {
    message = "Speaker deleted successfully";
  }
  return { message };
};
