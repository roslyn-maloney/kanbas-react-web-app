import { Link } from "react-router-dom";
import * as db from "./Database";
import React, { useState } from "react";

export default function Dashboard() {
  // create course state variable and initilize with database courses 
  const [courses, setCourses] = useState<any[]>(db.courses);
  // creating a course object with the default values
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/course7.webp", description: "New Description"
  });
  // creating addNewCourse event handler that sets courses as a copy f current courses state array
  // add course at the end of the array overriding _id to current time stamp
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, newCourse]);
  };
  // add a deleteCourse event handler accepting ID of course 
  //to remove by filtering out the course by its ID
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  // updates the course 
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };



  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/* add a title and button to invoke addNewCourse */}
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />
      {/* this is were the courses are being shown */}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: 300 }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                  to={`/Kanbas/Courses/${course._id}/Home`}
                >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    {/* add delete button next to the courses name 
                    and invoke th edeleteCourse event when clicked */}
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    {/* next to the delete button add a edit button 
                    that invokes the edit event handler */}
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}