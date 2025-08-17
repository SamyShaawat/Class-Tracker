import { Router } from "express";
import studentModel from "../DB/models/student";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ message: "Internal Server error" });
  }
});
router.post("/", async (req, res) => {
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Internal Server error");
    }
  }
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
