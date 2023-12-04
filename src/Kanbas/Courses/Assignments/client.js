import axios from "axios";

const BASE_API = process.env.REACT_APP_BASE_API_URL;
const COURSES_URL = `${BASE_API}/api/courses`;
const ASSIGNMENTS_URL = `${BASE_API}/api/assignments`;
export const deleteAssignment = async (assignmentId) => {
  const response = await axios
    .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignment) => {
  const response = await axios.
    put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
  return response.data;
};

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

