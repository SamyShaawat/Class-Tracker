import { IntegerType } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

interface IStudent extends Document {
  studentID: string;
  fullName: string;
  age: string;
  email: string;
  className: string;
}

const studentSchema: Schema<IStudent> = new Schema({
  studentID: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  className: { type: String, required: true },
});

const studentModel = mongoose.model<IStudent>("Student", studentSchema);
export default studentModel;
