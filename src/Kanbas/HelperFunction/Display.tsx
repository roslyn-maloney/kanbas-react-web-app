import React, { useState } from "react";
import { useSelector } from "react-redux";
import { enrollments } from "../Database";
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
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
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
                                </div>
                            </div>
                        ))} </div>
                </div>
            ) : (
                <div>
                    {enrollments
                        .filter((enrolled) => enrolled.user.includes(currentUser._id))
                        .map((enrolled) => (
                            <div key={currentUser._id}>
                                {courses.map((course) => (
                                    <div className="wd-dashboard-course col" style={{ width: 300 }} key={enrolled.course}>
                                        <div className="card rounded-3 overflow-hidden">
                                            <Link
                                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                                to={`/Kanbas/Courses/${enrolled.course}/Home`}>
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
                                        </div>
                                    </div>))}
                            </div>
                        ))
                    }
                </div>

            )}
        </div>
    );
}
