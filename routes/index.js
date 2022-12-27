import express from "express";
import { imageUploader } from "../middlewares/imageSaver";
import { getAllContactUs, addContactUs } from "../controllers/ContactUs";
import {
  getAllBrands,
  getBrandById,
  addBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/Brands";
import {
  getAllSpeakers,
  getSpeakerById,
  addSpeaker,
  updateSpeaker,
  deleteSpeaker,
} from "../controllers/Speakers";
const router = express.Router();

const imageContainer = "images";

router.get("/getAllBrands", getAllBrands);
router.get("/getBrandById?:id", getBrandById);
router.post("/addBrand", imageUploader(imageContainer).any(), addBrand);
router.put("/updateBrand", imageUploader(imageContainer).any(), updateBrand);
router.delete("/deleteBrand?:id", deleteBrand);

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

export default router;
