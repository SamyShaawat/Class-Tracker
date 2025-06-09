import { data } from "../utils/data.ts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StudentTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" sx={{ border: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }}>
              Full Name
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }}>Age</TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }}>
              Email
            </TableCell>
            <TableCell sx={{ border: 1, background: "#BDBDBD" }}>
              Class
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                >
                  {item.fullName}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                >
                  {item.age}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                >
                  {item.email}
                </TableCell>
                <TableCell
                  sx={{
                    border: 1,
                    backgroundColor: index % 2 === 0 ? "#F3F3F3" : "#FFFFFF",
                  }}
                >
                  {item.class}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
