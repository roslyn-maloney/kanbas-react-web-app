import { Link } from "react-router-dom";
import { useState } from "react";
import * as enrollClient from "../Dashboard/Enrollment/client";
import { useSelector } from "react-redux";

export default function Dashboard({
    courses,
    course,
    currentUser,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    currentUser: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {

    const [enrollments, setEnrollments] = useState<any[]>([]);
    const [enroll, setEnroll] = useState<any>({
        _id: "1234", user: currentUser._id, course: course._id
    });

    // deleting a enrollment
    const deleteEnrollment = async (courseId: string, userID: string) => {
        const status = await enrollClient.unenroll(courseId, userID);
        setEnrollments(enrollments.filter((e) => e._id !== courseId));
    };

    // adding a new course 
    const addEnrollment = async () => {
        const newEnromllment = await enrollClient.enroll(course._id, currentUser._id);
        setEnroll([ ...enrollments, newEnromllment]);
    };

    return (
        <div id="wd-dashboard">
            {currentUser.role === "FACULTY" && (
                <div>
                    <hr />
                    <h5>
                        New Course
                        <button className="btn btn-primary float-end" onClick={addNewCourse}>
                            Add
                        </button>
                        <button
                            className="btn btn-warning float-end me-2"
                            onClick={updateCourse}
                        >
                            Update
                        </button>
                        <br />
                        <br />
                        <input
                            value={course.name}
                            className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        />
                        <textarea
                            value={course.description}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, description: e.target.value })
                            }
                        />
                    </h5>
                    <hr />
                    <h2 id="wd-dashboard-published">
                        Published Courses ({courses.length})
                    </h2>
                    <hr />

                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {courses.map((course) => (
                                <div key={course._id} className="wd-dashboard-course col" style={{ width: 300 }}>
                                    <div className="card rounded-3 overflow-hidden">
                                        <Link
                                            className="wd-dashboard-course-link text-decoration-none text-dark"
                                            to={`/Kanbas/Courses/${course._id}/Home`}
                                        >
                                            <img src={course.image} width="100%" height={160} alt={course.name} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {course.name}
                                                </h5>
                                                <p
                                                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                    style={{ maxHeight: 100 }}
                                                >
                                                    {course.description}
                                                </p>
                                                <button className="btn btn-primary">Go</button>

                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
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
            )}

            {currentUser.role === "STUDENT" && (
                <div>
                    <h2 id="wd-dashboard-published">
                        Published Courses ({courses.length})
                    </h2>
                    <hr />
                    <button className="btn btn-primary float-end mb-2"
                        id="wd-add-new-course-click">Enrollments</button>
                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {courses.map((course) => (
                                <div key={course._id} className="wd-dashboard-course col" style={{ width: 300 }}>
                                    <div className="card rounded-3 overflow-hidden">
                                        <Link
                                            className="wd-dashboard-course-link text-decoration-none text-dark"
                                            to={`/Kanbas/Courses/${course._id}/Home`}
                                        >
                                            <img src={course.image} width="100%" height={160} alt={course.name} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {course.name}
                                                </h5>
                                                <p
                                                    className="wd-dashboard-course-description card-text overflow-y-hidden"
                                                    style={{ maxHeight: 100 }}
                                                >
                                                    {course.description}
                                                </p>
                                                <button className="btn btn-primary">Go</button>
                                                <button
                                                    // onClick={(event) => {
                                                    //     event.preventDefault();
                                                    //     enrollClient.unenroll(currentUser._id, course._id)
                                                    // }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Unenroll
                                                </button>
                                                {/* <button onClick={(event) => {
                                                    event.preventDefault();
                                                    enrollClient.enroll(currentUser._id, course._id)
                                                }}>
                                                    Enroll
                                                </button> */}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
