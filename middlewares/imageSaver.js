import multer from "multer";

let imageStorage = (photosFolder) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, photosFolder);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
};
export const imageUploader = (imagesFolder) => {
  return multer({
    storage: imageStorage(imagesFolder),
  });
};
