import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
dotenv.config({ path: path.resolve(__dirname, "../config/.env") });
import connectionDB from "./DB/connectionDB";
import router from "./routers/students";

const app = express();
const PORT = process.env.PORT;
app.use(cors(
  {
    origin: "http://localhost:5173", // Adjust this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent with requests
  }
));
app.use(express.json());
app.use("/students", router);

(async () => {
  await connectionDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
