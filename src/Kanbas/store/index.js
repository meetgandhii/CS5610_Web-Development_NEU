import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/moduleReducer.js";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer.js";

const store = configureStore({
  reducer: {
    modulesReducer, assignmentsReducer
  }
});


export default store;

