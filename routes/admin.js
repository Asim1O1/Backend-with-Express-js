import express from "express";
import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = Router();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

// Route to serve the form
router.get("/addProduct", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "addProduct.html"));
});

// Route to handle form submission
router.post("/addProduct", (req, res) => {
  console.log("The request body is:", req.body);

  res.send(`Product added successfully! `);
});

export default router;
