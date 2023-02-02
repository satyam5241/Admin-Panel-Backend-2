const express = require("express");
const multer = require("multer");
const { getAllContactUs, addContactUs } = require("../controllers/ContactUs");
const { getAllRegister, addRegister } = require("../controllers/Register");
const {
  getAllBrands,
  getBrandById,
  addBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/Brands");
const {
  getAllSchedules,
  getScheduleById,
  addSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/Schedule");
const {
  getAllSpeakers,
  getSpeakerById,
  addSpeaker,
  updateSpeaker,
  deleteSpeaker,
} = require("../controllers/Speakers");

const router = express.Router();
const imageContainer = "images";

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
const imageUploader = (imagesFolder) => {
  return multer({
    storage: imageStorage(imagesFolder),
  });
};

router.get("/getAllBrands", getAllBrands);
router.get("/getBrandById?:id", getBrandById);
router.post("/addBrand", imageUploader(imageContainer).any(), addBrand);
router.put("/updateBrand", imageUploader(imageContainer).any(), updateBrand);
router.delete("/deleteBrand?:id", deleteBrand);

router.get("/getAllSchedules", getAllSchedules);
router.get("/getScheduleById?:id", getScheduleById);
router.post("/addSchedule", imageUploader(imageContainer).any(), addSchedule);
router.put(
  "/updateSchedule",
  imageUploader(imageContainer).any(),
  updateSchedule
);
router.delete("/deleteSchedule?:id", deleteSchedule);

router.get("/getAllSpeakers", getAllSpeakers);
router.get("/getSpeakerById?:id", getSpeakerById);
router.post("/addSpeaker", imageUploader(imageContainer).any(), addSpeaker);
router.put(
  "/updateSpeaker",
  imageUploader(imageContainer).any(),
  updateSpeaker
);
router.delete("/deleteSpeaker", deleteSpeaker);

router.get("/getAllContactUs", getAllContactUs);
router.post("/addContactUs", addContactUs);

router.get("/getAllRegister", getAllRegister);
router.post("/addRegister", addRegister);

module.exports = router;
