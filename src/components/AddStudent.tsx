import { Button, Paper, TextField } from "@mui/material";
import { data, type Student } from "../utils/data.ts";
import type { Dispatch, SetStateAction } from "react";
interface Props {
  students: Student[];

  setStudents: Dispatch<SetStateAction<Student[]>>;
}
export const AddStudent = ({ students, setStudents }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newStudent = {
      id: data.length + 1,
      fullName: formData.get("fullName") as string,
      age: Number(formData.get("age")),
      email: formData.get("email") as string,
      class: formData.get("className") as string,
    };
    setStudents([...students, newStudent]);
    // data.push(newStudent);
    console.log("New Student Added:", newStudent);
    event.currentTarget.reset();
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
