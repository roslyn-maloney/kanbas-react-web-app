import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import PeopleTable from "./People/Table";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
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
            <Route path="People" element={<PeopleTable />} />
            <Route
              path="Assignments/:aid"
              element={<h2>Assignment Editor</h2>}
            />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}