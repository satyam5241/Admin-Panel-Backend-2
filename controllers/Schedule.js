const {
  getAllSchedulesQuery,
  getScheduleByIdQuery,
  addScheduleQuery,
  updateScheduleQuery,
  deleteScheduleQuery,
} = require("../models/Schedules.js");
const CustomErrorHandler = require("../service/CustomErrorHandler");

exports.getAllSchedules = async (req, res, next) => {
  try {
    let data = await getAllSchedulesQuery();
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.getScheduleById = async (req, res, next) => {
  try {
    let data = await getScheduleByIdQuery(req.query.id);
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.addSchedule = async (req, res, next) => {
  try {
    let data = await addScheduleQuery(req.body, req.files[0].path);

    if (!data) {
      return next(CustomErrorHandler.wrongCredentials());
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateSchedule = async (req, res, next) => {
  console.log(req.files.length);
  if (req.files.length) {
    console.log("aa", req.files[0].path);
    try {
      let data = await updateScheduleQuery(req.body, req.files[0].path);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      let data = await updateScheduleQuery(req.body, req.body.logo);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
};

exports.deleteSchedule = async (req, res, next) => {
  try {
    let data = await deleteScheduleQuery(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
