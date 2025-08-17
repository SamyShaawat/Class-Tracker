import type { Student } from "../utils/data.ts";
const BASE_URL = "http://localhost:3000/students";

export const fetchStudents = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const createStudent = async (data: Student) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`${response.statusText}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
