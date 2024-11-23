// import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";

// const initialState = {
//   enrollments: [],
// };
// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     setEnrollment: (state, action) => {
//       state.enrollments = action.payload;
//     },
//     addEnrollment: (state, { payload: enrollment }) => {
//       const newEnrollement: any = {
//         _id: new Date().getTime().toString(),
//         name: assignment.name,
//         course: assignment.course,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== assignmentId);
//     },
//   },
// });
// export const { addEnrollment, deleteEnrollment, setEnrollment } =
//   assignmentsSlice.actions;

// export default assignmentsSlice.reducer;
