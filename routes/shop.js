import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

export default shopRouter;
