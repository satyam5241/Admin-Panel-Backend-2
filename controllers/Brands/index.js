import {
  getAllBrandsQuery,
  getBrandByIdQuery,
  addBrandQuery,
  updateBrandQuery,
  deleteBrandQuery,
} from "../../models/Brands";
import CustomErrorHandler from "../../service/CustomErrorHandler";

export const getAllBrands = async (req, res, next) => {
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

export const getBrandById = async (req, res, next) => {
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

export const addBrand = async (req, res, next) => {
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

export const updateBrand = async (req, res, next) => {
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

export const deleteBrand = async (req, res, next) => {
  try {
    let data = await deleteBrandQuery(req.query.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
