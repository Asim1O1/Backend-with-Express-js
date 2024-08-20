import express from "express";
import adminRoutes from "./routes/admin.js";

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Middleware to parse URL-encoded bodies (required for form submissions)
server.use(express.urlencoded({ extended: true }));

// Admin routes
server.use("/admin", adminRoutes);

// Home route
server.get("/", (req, res) => {
  res.status(200).send("<h1>This is the Home Page</h1>");
});

// 404 handler
server.use((req, res) => {
  res.status(404).send("<h1>Oops... Page Not Found</h1>");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
