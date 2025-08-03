import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { Student } from "../utils/data.ts";
// import { useEffect } from "react";

interface Props {
  students: Student[];
}
export const StudentTable = ({ students }: Props) => {
  // useEffect(() => {
  //   if (students.length === 6) {
  //     alert("You have reached the maximum number of students (5).");
  //   }
  // }, [students]);
  return (
    <TableContainer
      component={Paper}
      sx={{ width: 1200, margin: "auto", marginTop: 5 }}
    >
      <Table size="small" sx={{ border: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }} align="center">
              ID
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }} align="center">
              Full Name
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }} align="center">
              Age
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }} align="center">
              Email
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }} align="center">
              Class
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                  align="center"
                >
                  {item.studentID}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                  align="center"
                >
                  {item.fullName}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                  align="center"
                >
                  {item.age}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                  align="center"
                >
                  {item.email}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                  align="center"
                >
                  {item.className}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
