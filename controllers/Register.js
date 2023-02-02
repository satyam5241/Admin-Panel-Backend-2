const {
  getAllRegisterQuery,
  addRegisterQuery,
} = require("../models/Register.js");
const CustomErrorHandler = require("../service/CustomErrorHandler");

exports.getAllRegister = async (req, res, next) => {
  try {
    let data = await getAllRegisterQuery();
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.addRegister = async (req, res, next) => {
  try {
    let data = await addRegisterQuery(req.body);
    if (!data) {
      return next(CustomErrorHandler.wrongCredentials());
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};
