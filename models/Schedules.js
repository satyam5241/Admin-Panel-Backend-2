const { query } = require("../database/database.js");

exports.getAllSchedulesQuery = async () => {
  const data = await query(`SELECT * FROM allSchedule`);

  return {
    data,
  };
};

exports.getScheduleByIdQuery = async (id) => {
  const data = await query(`SELECT * FROM allSchedule WHERE id=${id}`);

  return {
    data,
  };
};

exports.addScheduleQuery = async (data, path) => {
  const result = await query(
    `INSERT INTO allSchedule(dayName, startTime, endTime, logo, name, position, scheduleTitle, scheduleDescription) VALUES('${data.dayName}', '${data.startTime}', '${data.endTime}', '${path}', '${data.name}', '${data.position}', '${data.scheduleTitle}', '${data.scheduleDescription}')`
  );

  let message = "Something went wrong when adding Schedule";
  let code = 400;

  if (result) {
    message = "Schedule added successfully";
    code = 200;
  }
  return { message, code };
};

exports.updateScheduleQuery = async (data, path) => {
  const result = await query(
    `UPDATE allSchedule SET dayName="${data.dayName}", startTime='${data.startTime}', endTime='${data.endTime}', logo='${path}', name='${data.name}', position='${data.position}', scheduleTitle='${data.scheduleTitle}', scheduleDescription='${data.scheduleDescription}' WHERE id=${data.id}`
  );

  let message = "Something went wrong when updating Schedule";
  let code = 400;

  if (result) {
    message = "Schedule updated successfully";
    code = 200;
  }

  return { message, code };
};

exports.deleteScheduleQuery = async (id) => {
  const result = await query(`DELETE FROM allSchedule WHERE id=${id}`);

  let message = "Something went wrong when deleting Schedule";

  if (result) {
    message = "Schedule deleted successfully";
  }

  return { message };
};
