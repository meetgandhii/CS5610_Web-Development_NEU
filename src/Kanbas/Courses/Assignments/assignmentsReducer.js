import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: db.assignments,
    assignment: { "_id": "A101", "title": "A1 Setup", "course": "RS101", "subtitle": ["Week 0 Setup - Week Starting on Monday 01 September 2023 | ", " Sept 03, 2023 at 11:59 pm | 100pts"] },
  };
  
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addModule: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      },
      deleteModule: (state, action) => {
        state.assignments = state.assignments.filter(
          (module) => module._id !== action.payload
        );
      },
      updateModule: (state, action) => {
        state.assignments = state.assignments.map((module) => {
          if (module._id === action.payload._id) {
            return action.payload;
          } else {
            return module;
          }
        });
      },
      setModule: (state, action) => {
        state.module = action.payload;
      },
    },
  });
  
  
  export const { addModule, deleteModule,
    updateModule, setModule } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;