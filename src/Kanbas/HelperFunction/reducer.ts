import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: enrollments,
  };
  const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
      unEnroll: (state, {payload: user}) => {
        return {
            ...state,
            enrollments: [...state.enrollments],
          }
        },
    },
  });
  export const { unEnroll } =
    enrollmentSlice.actions;
  
  export default enrollmentSlice.reducer;