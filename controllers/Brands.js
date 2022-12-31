const {
  getAllBrandsQuery,
  getBrandByIdQuery,
  addBrandQuery,
  updateBrandQuery,
  deleteBrandQuery,
} = require("../models/Brands.js");
const CustomErrorHandler = require("../service/CustomErrorHandler");

exports.getAllBrands = async (req, res, next) => {
  try {
    let data = await getAllBrandsQuery();
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.getBrandById = async (req, res, next) => {
  try {
    let data = await getBrandByIdQuery(req.query.id);
    if (!data) {
      return next(CustomErrorHandler.notFound());
    }
    res.json(data);
  } catch (err) {
    return next(err);
  }
};

exports.addBrand = async (req, res, next) => {
  try {
    let data = await addBrandQuery(req.body, req.files[0].path);

    if (!data) {
      return next(CustomErrorHandler.wrongCredentials());
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateBrand = async (req, res, next) => {
  if (req.files.length) {
    try {
      let data = await updateBrandQuery(req.body, req.files[0].path);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      let data = await updateBrandQuery(req.body, req.body.image);

      if (!data) {
        return next(CustomErrorHandler.wrongCredentials());
      }
      res.json(data);
    } catch (err) {
      next(err);
    }
  }
};

exports.deleteBrand = async (req, res, next) => {
  try {
    let data = await deleteBrandQuery(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
