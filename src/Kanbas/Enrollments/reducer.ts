import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: [],
};
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollment: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollement: any = {
        _id: new Date().getTime().toString(),
        name: enrollment.name,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollement] as any;
    },
    deleteEnrollment: (state, { payload: enrollId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollId);
    },
  },
});
export const { addEnrollment, deleteEnrollment, setEnrollment } =
  enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
