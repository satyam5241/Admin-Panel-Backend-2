import {
  getAllContactUsQuery,
  addContactUsQuery,
} from "../../models/ContactUs";
import CustomErrorHandler from "../../service/CustomErrorHandler";

export const getAllContactUs = async (req, res, next) => {
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

export const addContactUs = async (req, res, next) => {
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
