import express from "express";
import path from "path";
import rootPath from "../utils/path.js";

const shopRouter = express.Router();

shopRouter.get("/", (req, res) => {
  res.sendFile(path.join(rootPath, "..", "views", "shop.html"));
});

export default shopRouter;
