import mongoose from "mongoose";

const connectionDB = async () => {
  const uri = process.env.URI_CONNECTION;
  const DBName = process.env.DBName;
  if (!uri) {
    console.error(
      "MongoDB connection URI is not defined in environment variables."
    );
    process.exit(1);
  }
  try {
    await mongoose.connect(uri);
    console.log(`Connected to MongoDB at ${DBName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectionDB;
