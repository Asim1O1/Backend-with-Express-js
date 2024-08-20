import { Router } from "express";

const router = Router();

// Route to serve the form
router.get("/addProduct", (req, res, next) => {
  res.send(`
    <form action="/admin/addProduct" method="POST">
      <label for="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" required>
      <label for="productPrice">Product Price:</label>
      <input type="number" id="productPrice" name="productPrice" required>
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
router.post("/addProduct", (req, res) => {
  // Log the request body which contains form data
  console.log("The request body is:", req.body);

  const { productName, productPrice } = req.body;

  res.send(
    `Product added successfully! Name: ${productName}, Price: ${productPrice}`
  );
});

export default router;
