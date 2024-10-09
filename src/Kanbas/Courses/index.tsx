import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import PeopleTable from "./People/Table";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa6";
import Editor from "./Assignments/Editor"

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger"> <FaAlignJustify className="me-4 fs-4 mb-1" /> Course 1234</h2>
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
            <Route path="Assignments/:aid" element={<Editor />} />
            <Route path="People" element={<PeopleTable />} />
            
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}