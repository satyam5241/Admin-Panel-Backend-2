const { query } = require("../database/database.js");

exports.getAllBrandsQuery = async () => {
  const data = await query(`SELECT * FROM allBrands`);

  return {
    data,
  };
};

exports.getBrandByIdQuery = async (id) => {
  const data = await query(`SELECT * FROM allBrands WHERE id=${id}`);

  return {
    data,
  };
};

exports.addBrandQuery = async (data, path) => {
  const result = await query(
    `INSERT INTO allBrands(image, name, category, link, description) VALUES('${path}', '${data.name}', '${data.category}', '${data.link}', '${data.description}')`
  );

  let message = "Something went wrong when adding brand";
  let code = 400;

  if (result) {
    message = "Brand added successfully";
    code = 200;
  }
  return { message, code };
};

exports.updateBrandQuery = async (data, path) => {
  const result = await query(
    `UPDATE allBrands SET image="${path}", name="${data.name}", category="${data.category}", link="${data.link}", description="${data.description}" WHERE id=${data.id}`
  );

  let message = "Something went wrong when updating brand";
  let code = 400;

  if (result) {
    message = "Brand updated successfully";
    code = 200;
  }

  return { message, code };
};

exports.deleteBrandQuery = async (id) => {
  const result = await query(`DELETE FROM allBrands WHERE id=${id}`);

  let message = "Something went wrong when deleting brand";

  if (result) {
    message = "Brand deleted successfully";
  }

  return { message };
};
