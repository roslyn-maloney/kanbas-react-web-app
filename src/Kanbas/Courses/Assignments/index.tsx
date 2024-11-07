import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "./AssignmentLessonControls";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteAssignment } from "./reducer";


export default function Assignments(
  { currentUser, }: { currentUser: any; }
) {
  const { cid } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer
  ).assignments.filter((assignment: any) => assignment.course === cid);

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
  };

  const dispatch = useDispatch();

  return (
    //search bar
    <div id="wd-assignments">
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input id="wd-search-assignment"
          placeholder="Search for Assignments"
          style={{ borderRadius: '10px' }} />
      </div>

      {currentUser.role == "FACULTY" && (
        <div>
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={handleAddAssignment}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignments
          </button>

          {/* group button */}
          <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group </button><br /><br /><br /><br /> </div>
      )}
      {/* the heading of the assignments table */}
      <div>
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <p className="wd-rounded-corners-all-around 
                  wd-border-thin wd-border-gray wd-border-solid  small-text">
                40% of Total
              </p>
              <FaPlus className="wd-side-icon" />

              {/* the actual assignments  */}
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1"> 
                    {currentUser.role == "FACULTY" && (<div>
                      <BsGripVertical className="me-2 fs-3" /><PiNotebookThin className="me-2 fs-3" />
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                      {assignment.title}
                      </Link> 
                    </div>)}


                    {currentUser.role == "STUDENT" && (
                      <div>
                        <BsGripVertical className="me-2 fs-3" /><PiNotebookThin className="me-2 fs-3" />{assignment.title}
                      </div>)}


                    {currentUser.role == "FACULTY" && (<div>
                      <br /> <LessonControlButtons assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => {
                          dispatch(deleteAssignment(assignmentId))
                        }} /> </div>)}
                    <p>
                      <span className="red-text">Multiple Modules</span>
                      <b> Not available until</b> {assignment.from} at 12:00am |<br />
                      <b>Due</b> {assignment.due} | {assignment.points}pts
                    </p>
                  </li>
                ))}
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
}
