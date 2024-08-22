import express from "express";
import { Router } from "express";
import path from "path";
import rootPath from "../utils/path.js";

const router = Router();

// Route to serve the form
router.get("/addProduct", (req, res) => {
  res.sendFile(path.join(rootPath, "..", "views", "addProduct.html"));
});

// Route to handle form submission
router.post("/addProduct", (req, res) => {
  console.log("The request body is:", req.body);

  res.send(`Product added successfully! `);
});

export default router;
