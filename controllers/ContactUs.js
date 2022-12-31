const {
  getAllContactUsQuery,
  addContactUsQuery,
} = require("../models/ContactUs.js");
const CustomErrorHandler = require("../service/CustomErrorHandler");

exports.getAllContactUs = async (req, res, next) => {
  try {
    let data = await getAllContactUsQuery();
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.addContactUs = async (req, res, next) => {
  try {
    let data = await addContactUsQuery(req.body);
    if (!data) {
      return next(CustomErrorHandler.wrongCredentials());
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};
