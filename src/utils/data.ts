export interface Student {
  id: number;
  fullName: string;
  age: number;
  email: string;
  class: string;
}

export const data: Student[] = [
  {
    id: 1,
    fullName: "Samy",
    age: 24,
    email: "samy@gmail.com",
    class: "Master",
  },
  {
    id: 2,
    fullName: "Ali",
    age: 25,
    email: "ali@gmail.com",
    class: "PHD",
  },
  {
    id: 3,
    fullName: "Omar",
    age: 26,
    email: "omar@gmail.com",
    class: "MBA",
  },
  {
    id: 4,
    fullName: "Khaled",
    age: 27,
    email: "khaled@gmail.com",
    class: "BSc",
  },
];
