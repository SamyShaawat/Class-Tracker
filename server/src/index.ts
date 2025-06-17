import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
import connectionDB from "./DB/connectionDB";
import router from "./routers/students";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/students", router);
(async () => {
  await connectionDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
