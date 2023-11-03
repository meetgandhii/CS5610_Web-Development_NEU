import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
  modules: db.modules,
  module: {  _id: new Date().getTime(),
    "name": "New Subject",
        "heading": "New Heading",
        "points": "New Content",
        "points2": "New Content",
        "points3": "New Content",
        "points4": "New Content",
        "points5": "New Content",

        "heading1": "New Heading",
        "points6": "New Content",
        "points7": "New Content",

        "heading2": "New Heading",
        "points8": "New Content",
        "points9": "New Content",
        "points10": "New Content",
        "points11": "New Content",
        "points12": "New Content",
        "points13": "New Content",
     },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
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
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;