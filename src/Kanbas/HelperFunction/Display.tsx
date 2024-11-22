import React, { useState } from "react";
import { useSelector } from "react-redux";
import { courses } from "../Database";
import { Link } from "react-router-dom";

export default function Display() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [displayed, setdisplay] = useState(true);
    const handleElement = () => {
        setdisplay(!displayed);
    }

    return (
        <div id="wd-boolean-state-variables">
            <button className="btn btn-primary" style={{ float: 'right' }} onClick={handleElement}>Enrollment</button>
            {!displayed ? (
                <div>
                    <h2 id="wd-dashboard-published">
                        Published Courses ({courses.length})
                    </h2>
                    <hr />
                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {courses
                                .map((course) => (
                                    <div className="wd-dashboard-course col" style={{ width: 300 }}>
                                        <div className="card rounded-3 overflow-hidden">
                                            <Link
                                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                                to={`/Kanbas/Courses/${course._id}/Home`}>
                                                <img src={`${course.image}`} width="100%" height={160} />

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
                                                    <button className="btn btn-primary"> Go </button> </div>
                                            </Link>
                                            {/* Button for Enroll */}
                                            <button className="btn btn-success">Enroll</button>
                                        </div>
                                    </div>
                                ))}
                        </div> </div>

                </div>
            ) : (
                <div>
                    <h2 id="wd-dashboard-published">
                        Published Courses ()
                    </h2>
                    <hr />
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses
                            .map((course) => (
                                <div className="wd-dashboard-course col" style={{ width: 300 }} key={course._id}>
                                    <div className="card rounded-3 overflow-hidden">
                                        <Link
                                            className="wd-dashboard-course-link text-decoration-none text-dark"
                                            to={`/Kanbas/Courses/${course._id}/Home`}>
                                            <img src={`${course.image}`} width="100%" height={160} />
                                            <div className="card-body">
                                                <h5 className="wd-dashboard-course-title card-title">
                                                    {course.name}
                                                </h5>
                                                <p
                                                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                    style={{ maxHeight: 100 }}>
                                                    {course.description}
                                                </p>
                                                <button className="btn btn-primary">Go</button>
                                            </div>
                                        </Link>
                                        {/* Button for Unenroll */}
                                        <button className="btn btn-danger">Unenroll</button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}
