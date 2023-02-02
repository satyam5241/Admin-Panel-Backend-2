const { query } = require("../database/database.js");
const db = require("../mysql_connect");
exports.getAllSpeakersQuery = async () => {
  const data = await query(`SELECT * FROM allSpeakers`);
  return {
    data,
  };
};

exports.getSpeakerByIdQuery = async (id) => {
  const data = await query(`SELECT * FROM allSpeakers WHERE id=${id}`);

  return {
    data,
  };
};

exports.addSpeakerQuery = async (data, path) => {
  const result = await query(
    `INSERT INTO allSpeakers(image, name, position, fbLink, twitterLink, instagramLink, linkedinLink, description) VALUES('${path}', '${data.name}', '${data.position}', '${data.fbLink}', '${data.twitterLink}', '${data.instagramLink}', '${data.linkedinLink}', '${data.description}')`
  );

  let message = "Something went wrong when adding speaker";
  let code = 400;

  if (result) {
    message = "Speaker added successfully";
    code = 200;
  }
  return { message, code };
};

exports.updateSpeakerQuery = async (data, path) => {
  const result = await query(
    `UPDATE allSpeakers SET image="${path}", name="${data.name}", position="${data.position}", fbLink="${data.fbLink}", twitterLink="${data.twitterLink}", instagramLink="${data.instagramLink}", linkedinLink="${data.linkedinLink}", description="${data.description}" WHERE id=${data.id}`
  );

  let message = "Something went wrong when updating speaker";
  let code = 400;

  if (result) {
    message = "Speaker updated successfully";
    code = 200;
  }
  return { message, code };
};

exports.deleteSpeakerQuery = async (id) => {
  const result = await query(`DELETE FROM allSpeakers WHERE id=${id}`);
  let message = "Something went wrong when deleting speaker";

  if (result) {
    message = "Speaker deleted successfully";
  }
  return { message };
};
