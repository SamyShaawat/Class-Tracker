import { useState } from "react";
import { AddStudent } from "./components/AddStudent.tsx";
import { StudentTable } from "./components/StudentTable.tsx";
import { data } from "./utils/data.ts";

function App() {
  const [students, setStudents] = useState(data);
  return (
    <>
      <AddStudent students={students} setStudents={setStudents}  />
      <StudentTable students={students} />
    </>
  );
}

export default App;
