import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent.tsx";
import { StudentTable } from "./components/StudentTable.tsx";
import type { Student } from "./utils/data.ts";
// import { data } from "./utils/data.ts";
import { fetchStudents } from "./api/students.ts";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    fetchStudents().then((data) => {
      setStudents(data);
    });
  }, []);
  return (
    <>
      <AddStudent students={students} setStudents={setStudents} />
      <StudentTable students={students} />
    </>
  );
}

export default App;
