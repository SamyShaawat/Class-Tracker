export const fetchStudents = async () => {
  const response = fetch("http://localhost:3000/students");
  const data = (await response).json();
  return data;
};
