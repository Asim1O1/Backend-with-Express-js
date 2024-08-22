import express from "express";
import adminRoutes from "./routes/admin.js";
import path from "path";
import shopRouter from "./routes/shop.js";
import rootPath from "./utils/path.js";
import { fileURLToPath } from "url";

// Get the current directory in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());

// Middleware to parse URL-encoded bodies (required for form submissions)
server.use(express.urlencoded({ extended: true }));

// Serve static files from the "views" directory
server.use(express.static(path.join(__dirname, "public")));

// Admin routes
server.use("/admin", adminRoutes);

// Home route
server.use("/", shopRouter);

// 404 handler
server.use((req, res) => {
  res.sendFile(path.join(rootPath, "..", "views", "404.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
