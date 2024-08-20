import express from "express";
import router from "./routes/auth.js";

const server = express();

server.use(express.json());
server.use("/", router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
