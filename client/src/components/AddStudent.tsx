import { Button, Paper, TextField } from "@mui/material";
import { type Student } from "../utils/data.ts";
import { type Dispatch, type SetStateAction } from "react";
import { createStudent } from "../api/students.ts";
interface Props {
  students: Student[];

  setStudents: Dispatch<SetStateAction<Student[]>>;
}
export const AddStudent = ({ students, setStudents }: Props) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const newStudent: Student = {
      studentID: students.length + 1,
      fullName: formData.get("fullName") as string,
      age: Number(formData.get("age")),
      email: formData.get("email") as string,
      className: formData.get("className") as string,
    };

    try {
      const data = await createStudent(newStudent);
      setStudents((prev) => [...prev, data]);
      form.reset();
    } catch (error) {
      console.error("Failed to add student:", error);
    }
  };

  return (
    <Paper
      sx={{
        width: 1100,
        margin: "auto",
        marginTop: 5,
        padding: 4,
        gap: 1,
        display: "flex",
        flexDirection: "column",
        border: 2,
        borderColor: "#BDBDBD",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Age"
        name="age"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Class"
        name="className"
        variant="outlined"
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Paper>
  );
};
