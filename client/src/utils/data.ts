export interface Student {
  studentID: number;
  fullName: string;
  age: number;
  email: string;
  className: string;
}

export const data: Student[] = [
  {
    studentID: 1,
    fullName: "Samy",
    age: 24,
    email: "samy@gmail.com",
    className: "Master",
  },
  {
    studentID: 2,
    fullName: "Ali",
    age: 25,
    email: "ali@gmail.com",
    className: "PHD",
  },
  {
    studentID: 3,
    fullName: "Omar",
    age: 26,
    email: "omar@gmail.com",
    className: "MBA",
  },
  {
    studentID: 4,
    fullName: "Khaled",
    age: 27,
    email: "khaled@gmail.com",
    className: "BSc",
  },
];
