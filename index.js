import express from "express";
import dotenv from "dotenv";
import openRoutes from "./routes/openaiRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/openai", openRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on PORT ${process.env.PORT} ...`)
);
