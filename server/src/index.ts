import express from "express";
import "dotenv/config";


const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, Class Tracker!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});