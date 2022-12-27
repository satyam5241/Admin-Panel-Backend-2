import { query } from "../../database";

export const getAllBrandsQuery = async () => {
  const data = await query(`SELECT * FROM brands`);

  return {
    data,
  };
};

export const getBrandByIdQuery = async (id) => {
  const data = await query(`SELECT * FROM brands WHERE id=${id}`);

  return {
    data,
  };
};

export const addBrandQuery = async (data, path) => {
  const result = await query(
    `INSERT INTO brands(image, name) VALUES('${path}', '${data.name}')`
  );

  let message = "Something went wrong when adding brand";
  let code = 400;

  if (result) {
    message = "Brand added successfully";
    code = 200;
  }
  return { message, code };
};

export const updateBrandQuery = async (data, path) => {
  const result = await query(
    `UPDATE brands SET image="${path}", name="${data.name}" WHERE id=${data.id}`
  );

  let message = "Something went wrong when updating brand";
  let code = 400;

  if (result) {
    message = "Brand updated successfully";
    code = 200;
  }

  return { message, code };
};

export const deleteBrandQuery = async (id) => {
  const result = await query(`DELETE FROM brands WHERE id=${id}`);

  let message = "Something went wrong when deleting brand";

  if (result) {
    message = "Brand deleted successfully";
  }

  return { message };
};
