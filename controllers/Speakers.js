const {
  getAllSpeakersQuery,
  getSpeakerByIdQuery,
  addSpeakerQuery,
  updateSpeakerQuery,
  deleteSpeakerQuery,
} = require("../models/Speakers.js");
const CustomErrorHandler = require("../service/CustomErrorHandler");

exports.getAllSpeakers = async (req, res, next) => {
  try {
    let data = await getAllSpeakersQuery();
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.getSpeakerById = async (req, res, next) => {
  try {
    let data = await getSpeakerByIdQuery(req.query.id);
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.addSpeaker = async (req, res, next) => {
  try {
    let data = await addSpeakerQuery(req.body, req.files[0].path);

    if (!data) {
      return next(CustomErrorHandler.wrongCredentials());
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateSpeaker = async (req, res, next) => {
  if (req.files.length) {
    try {
      let data = await updateSpeakerQuery(req.body, req.files[0].path);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      let data = await updateSpeakerQuery(req.body, req.body.image);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
};

exports.deleteSpeaker = async (req, res, next) => {
  try {
    let data = await deleteSpeakerQuery(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
