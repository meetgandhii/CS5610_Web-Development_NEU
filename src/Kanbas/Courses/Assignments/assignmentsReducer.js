import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { "title": "New Assignment", "subtitle": "New Week Setup ", "subtitle2": " Whenever at whatever time ", "subtitle3": " Guess" },
  };
  
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
          },
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (Assignment) => Assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((Assignment) => {
          if (Assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return Assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  
  
  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;