import express from "express";
import { generateImage } from "../controllers/openai.js";

const router = express.Router();

router.route("/generate").post(generateImage);

export default router;
