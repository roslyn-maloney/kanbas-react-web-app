import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as coursesClient from "../client";
import { useEffect } from "react";


export default function Quizzes(
  { currentUser, }: { currentUser: any; }
) {
  const { cid } = useParams();
  const navigate = useNavigate();
//   const quizzes = useSelector(
//     (state: any) => state.assignmentReducer
//   ).assignments.filter((assignment: any) => assignment.course === cid);

//   const handleAddAssignment = () => {
//     navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
//   };

//   const dispatch = useDispatch();

//   const removeAssignment = async (assignmentId: string) => {
//     await assignmentsClient.deleteAssignment(assignmentId);
//     dispatch(deleteAssignment(assignmentId));
//   };
//   const fetchAssignments = async () => {
//     const assignments = await coursesClient.findAssignmentForCourse(cid as string);
//     dispatch(setAssignment(assignments));
//   };
//   useEffect(() => {
//     fetchAssignments();
//   }, []);



  return (
   <div>hello</div>
  );
}
