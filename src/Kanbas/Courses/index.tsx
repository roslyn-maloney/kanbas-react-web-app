import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import PeopleTable from "./People/Table";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa6";
import Editor from "./Assignments/Editor";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as client from "../Account/client";
import * as courseClient from "../Courses/client";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [users, setUsers] = useState<any[]>([]);
  const { uid } = useParams();


  const fetchUsers = async () => {
    let users;
    if(currentUser.role === "ADMIN"){
      users = await client.findAllUsers();
    } else {
      users = await courseClient.findUsersForCourse(course._id);
    }
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

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
            <Route path="Modules" element={<Modules currentUser={currentUser} />} />
            <Route path="Assignments" element={<Assignments currentUser={currentUser} />} />
            <Route path="Assignments/:aid" element={<Editor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}