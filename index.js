import express from "express";
import dotenv from "dotenv";
import openRoutes from "./routes/openaiRoutes.js";
import path from "path";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", openRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT ${process.env.PORT} ...`)
);
