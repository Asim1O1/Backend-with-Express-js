import express from "express";
import adminRoutes from "./routes/admin.js";
import path from "path";
import shopRouter from "./routes/shop.js";
import rootPath from "./utils/path.js";
const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Middleware to parse URL-encoded bodies (required for form submissions)
server.use(express.urlencoded({ extended: true }));

// Admin routes
server.use("/admin", adminRoutes);

// Home route
server.use("/", shopRouter);

// 404 handler
server.use((req, res) => {
  res.sendStatus(404).sendFile(path.join(rootPath, "views", "404.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
