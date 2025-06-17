import { Router } from "express";
import studentModel from "../DB/models/student";

const router = Router();

router.get("/", async (req, res) => {
  const students = await studentModel.find({});
  if (!students) {
    res.status(404).send({ message: "No students found" });
  }
  res.status(200).send(students);
});
router.post("/", async (req, res) => {
  const { studentID, fullName, age, email, className } = req.body;
  const newStudent = new studentModel({
    studentID,
    fullName,
    age,
    email,
    className,
  });
  await newStudent.save();
  res.status(201).send(newStudent);
});
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const updatedStudent = await studentModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updatedStudent) {
    res.status(404).send({ message: "Student not found" });
  }
  res.status(200).send(updatedStudent);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await studentModel.findByIdAndDelete(id);
  if (!deletedStudent) {
    res.status(404).send({ message: "Student not found" });
  }
  res.status(200).send({ message: "Student deleted successfully" });
});

export default router;
