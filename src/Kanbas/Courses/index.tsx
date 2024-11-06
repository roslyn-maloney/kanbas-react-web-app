import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import PeopleTable from "./People/Table";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa6";
import Editor from "./Assignments/Editor"
import { useState } from "react";
import * as db from "../Database";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  // const [assignments, setAssignments] = useState<any[]>(db.assignments);
  // const [assignment] = useState<any>({
  //   _id: "1234", Title: "New Assignment",
  //   from: "2023-09-10", due: "2023-12-15", description: "New Description",
  // });

  // const updateAssignment = () => {
  //   setAssignments(
  //     courses.map((a) => {
  //       if (a._id === assignment._id) {
  //         return assignment;
  //       } else {
  //         return a;
  //       }
  //     })
  //   );
  // };

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<Editor/>} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}